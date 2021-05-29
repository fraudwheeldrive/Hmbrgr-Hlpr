const seedUser = require('./user-seeds');
const seedRestaurants = require('./restaurant-seeds');
const seedIngredients = require('./ingredient-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUser();
    console.log('--------------');
  
    await seedRestaurants();
    console.log('--------------');
  
    await seedIngredients();
    console.log('--------------');

    process.exit(0);
  };
  
  seedAll();