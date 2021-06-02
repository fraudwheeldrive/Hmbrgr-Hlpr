const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, Menu, User } = require('../models');

router.get( '/', (req, res ) => {
    res.render( 'homepage' )
});

router.get( '/contact', (req, res ) => {
  if (req.session.loggedIn) {
    res.render( 'contact', {
      loggedIn: true
    })
    return;
  }
  res.render( 'contact' )
});

router.get('/newaccount', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
      }
    res.render('newaccount');
});

router.get('/', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
		}

	res.render('login');
});

router.get( '/login', (req, res ) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
      }
    res.render( 'login' )
  });
  


module.exports = router;