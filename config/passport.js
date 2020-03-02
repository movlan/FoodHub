const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/user')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
    User.findOne({ 'googleID': profile.id }, function(err, user) {
        // if there is error return cb with error
        if (err) return cb(err);
        // if we find user we have returning user
        if (user) {
            return cb(null, user);
        } else {
            const newUser = new User({
                name: profile.displayName,
                // when we get profile object from google OAuth it might contain multiple emails but first email is their main one so we will get that one
                email: profile.emails[0].value,
                profilePicture: profile.photos[0].value,
                googleID: profile.id
            });
            newUser.save(function(err) {
                if (err) return cb(err);
                return cb(null, newUser)
            });
        }
    });
}
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});