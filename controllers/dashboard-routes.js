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

router.get("/all-menu-items", (req, res) => {
    Menu.findAll({
		// where: {
		// 	user_id: req.session.user_id
		// },
      attributes: ["id", "description", "ingredients", "price", "location"],
    })
      .then((dbMenuData) => {
        // pass a single post object into the homepage template
        const menu = dbMenuData.map((menu) => menu.get({ plain: true }));
        res.render("allmenu", { menu });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// router.get( '/all-menu-items', (req, res ) => {

// 	res.render('allmenu', {
// 		loggedIn: true
// 	});
// });

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

router.get( '/edit', (req, res ) => {
	res.render('edit-menu', {
		loggedIn: true
	});
});

router.get( '/single-location-menu', (req, res ) => {
	res.render('single-location-menu', {
		loggedIn: true
	});
});

router.get( '/confirm-closing', (req, res ) => {
	res.render('closelocationconfirm', {
		loggedIn: true
	});
});



module.exports = router;