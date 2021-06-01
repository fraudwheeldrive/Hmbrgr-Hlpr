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
      const menuItems = dbMenuData.map((menu) => menu.get({ plain: true }));
      res.render("menu", { menuItems });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/menu/ :id", (req, res) => {
  Menu.findOne({
    where: {
      id: req.params.id,
    },
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
        if (!dbPostData) {
            res.status(404).json ({ message: 'no Menu Item found with this id'})
            return;
        }
  
      const singleMenu = dbMenuData.get({ plain: true });
      res.render('single-menu' , {singleMenu });
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
