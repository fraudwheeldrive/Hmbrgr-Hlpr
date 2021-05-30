const router = require('express').Router();
const { Restaurant } = require('../../models');

router.post('/', (req, res) => {
  Restaurant.create({
    restaurant_number: req.body.restaurant_number,
    address: req.body.address
  })
  .then(dbRestaurantData => res.json(dbRestaurantData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;