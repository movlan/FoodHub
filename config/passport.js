var passport = require('passport');

var GooleStrategy = require('passport-google-oauth');

passport.use(new GooleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
    // a user has logged in
}
));
