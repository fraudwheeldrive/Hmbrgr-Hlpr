const router = require("express").Router();
const sequelize = require("../config/connection");
const { Restaurant, Menu, User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/contact", (req, res) => {
  if (req.session.loggedIn) {
    res.render("contact", {
      loggedIn: true,
    });
    return;
  }
  res.render("contact");
});

router.get("/newaccount", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("newaccount");
});

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/location", (req, res) => {
  Restaurant.findAll({
    // where: {
    // 	user_id: req.session.user_id
    // },
    attributes: [
      "id",
      "city",
      "restaurant_number",
      "address",
      "phone",
      "email",
    ],
  })
    .then((dbRestaurantData) => {
      // pass a single post object into the homepage template
      const restaurant = dbRestaurantData.map((restaurant) =>
        restaurant.get({ plain: true })
      );
      res.render("location", { restaurant });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
