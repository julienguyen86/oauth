var express = require('express');
var authRoutes = require('./routes/auth-routes');
var profileRoutes = require('./routes/profile-routes');
var db = require("./models");
var cookieSession = require("cookie-session");
var passportSetup = require('./config/passport-setup');
var passport = require("passport");
var keys = require('./config/keys');
var app = express();
// set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());

app.use(passport.session());


// set up routes
app.use('/auth', authRoutes);

app.use("/profile", profileRoutes);

// create home route
app.get('/', function(req, res) {
res.render('home');
});

db.sequelize.sync({}).then(function() {
app.listen(3000,() => {
	console.log('app now listening for requests on port 3000')
});
});