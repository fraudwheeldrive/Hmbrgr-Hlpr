const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, Menu, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
	res.render('dashboard', {
			loggedIn: true
	});
})

router.get( '/new-location', (req, res ) => {
	res.render('newlocation', {
		loggedIn: true
	});
});

router.get( '/new-menu', (req, res ) => {
	res.render('newmenu', {
		loggedIn: true
	});
});

router.get( '/all-menu-items', (req, res ) => {
	res.render('allmenu', {
		loggedIn: true
	});
});

router.get( '/location-menu', (req, res ) => {
	res.render('locationmenu', {
		loggedIn: true
	});
});

router.get( '/close-location', (req, res ) => {
	res.render('closelocation', {
		loggedIn: true
	});
});

module.exports = router;