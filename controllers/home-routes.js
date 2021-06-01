const router = require("express").Router();

const sequelize = require("../config/connection");
const { Menu, User, Restauarant } = require("../models");

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
  res.render("menu", {
    id: 1,
    description: "hamBurger",
    ingredients: "1 beef patty, ketchup, mustard, onions, pickles",
    price: "2.49",
    location: 1,
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
