var router = require('express').Router();
var passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req,res) => {
	res.send('logging out');
})



// auth with google
router.get('/google', passport.authenticate('google',{
	scope: ['profile']
}));


//  (req, res) => {
// 	// handle with passport
// 	res.send('logging in with google');
// });


router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	res.send('you reached the callback URI');

});


// router.get('/auth/google/get',
//   passport.authenticate('google', { scope: 
//     [ 'https://www.googleapis.com/auth/plus.login',
//     , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
// ));

// router.get( '/auth/google/callback', 
//     passport.authenticate( 'google', { 
//         successRedirect: '/auth/google/success',
//         failureRedirect: '/auth/google/failure'
// }));
module.exports = router;