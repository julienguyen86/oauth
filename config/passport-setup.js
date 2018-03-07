var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys');
var db = require("../models");

passport.use(
	new GoogleStrategy({
	// options for the google strat
	callbackURL: '/auth/google/redirect',
	clientID: keys.google.clientID,
	clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
	// passport callback function
	console.log('passport callback function fired');
	console.log(profile);
	console.log(profile.displayName);
	console.log(profile.id);

	db.User.create({
		name: profile.displayName,
		googleId: profile.id
	}).then(function(response) {
		console.log(response);
	})
})

)
