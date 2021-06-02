const router = require('express').Router();
const { Restaurant, Menu } = require('../../models');

//restaurant get all 

router.get('/', (req, res) => {
  Restaurant.findAll({

    include: [
      {
        model: Menu,
        attributes: ['id', 'description', 'ingredients', 'price', 'location' ]
      }
    ]
  })
  .then(dbRestaurantData => res.json(dbRestaurantData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//restaurant by id 

router.get('/:id', (req, res) => {
  Restaurant.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Menu,
        attributes: ['id', 'description', 'ingredients', 'price' ]
      }
    ]
  })
    .then(dbRestaurantData => {
      if (!dbRestaurantData) {
        res.status(404).json({ message: 'No Restaurant found with this id' });
        return;
      }
      res.json(dbRestaurantData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// add a restaurant
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

// //update a restaurant
router.put('/:id' , (req, res) => {
  Restaurant.update(
    {
      restaurant_number: req.body.restaurant_number,
    address: req.body.address
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbRestaurantData => {
    if (!dbRestaurantData) {
      res.status(404).json({ message: 'No Restaurant found with this id' });
      return;
    }
    res.json(dbRestaurantData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//delete a Restaurant
router.delete('/:id', (req, res) => {
  Restaurant.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(dbRestaurantData => {
    if (!dbRestaurantData) {
      res.status(404).json({ message: 'No Restaurant found with this id' });
      return;
    }
    res.json(dbRestaurantData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;