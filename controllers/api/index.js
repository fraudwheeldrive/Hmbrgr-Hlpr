const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const menuRoutes = require('./menu-routes.js');
const restaurantRoutes = require('./restaurant-routes.js');

router.use('/users', userRoutes);
router.use('/menu', menuRoutes);
router.use('/restaurant', restaurantRoutes);

module.exports = router;