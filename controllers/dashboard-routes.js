const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, Menu, User } = require('../models');
const withAuth = require('../utils/auth');

router.get( '/restaurants', (req, res ) => {
	res.render( 'restaurants' )
});

router.get('/', withAuth, (req, res) => {
	res.render('dashboard', {
			loggedIn: req.session.loggedIn
	});
})


module.exports = router;