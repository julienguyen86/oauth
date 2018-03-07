const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

var db = require('./models');

const app = express();


// set up view engine
app.set('view engine', 'ejs');


// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
res.render('home');
});

db.sequelize.sync({force: true}).then(function(){
app.listen(3000,() => {
	console.log('app now listending for requests on port 3000')
});
});