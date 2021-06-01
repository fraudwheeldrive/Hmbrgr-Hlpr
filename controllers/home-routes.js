const router = require("express").Router();

const sequelize = require("../config/connection");
const { Menu, User, Restaurant } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/restaurants", (req, res) => {
  res.render("restaurants");
});
router.get("/menu", (req, res) => {
  Menu.findAll({
    attributes: ["id", "description", "ingredients", "price", "location"],

    //   include: [
    //     {
    //       model: Restaurant,
    //       attributes: ['id', 'restaurant_number', 'address', 'user_id'],
    //       include: {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     },
    //     {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   ]
  })
    .then((dbMenuData) => {
      // pass a single post object into the homepage template
      res.render("menu", dbMenuData[0].get({ plain: true }));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/newaccount", (req, res) => {
  res.render("newaccount");
});

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
