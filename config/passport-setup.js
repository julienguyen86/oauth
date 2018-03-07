const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model.js');

passport.use(
	new GoogleStrategy({
// options for the google strat
callbackURL: '/auth/google/redirect',
clientID: keys.google.clientID,
clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {

	// passport callback function
	console.log('passport callback function fired');
	// var newProfile = JSON.parse(profile)
	console.log(profile.displayName);
	console.log("HEEEEEEEEEERRRRRRRRREEEEEEEE")
	new User({
		username: profile.displayName,
		googleId: profile.id
	}).then(function(User) {
		console.log("new user created: " + User);
	})
})

)
