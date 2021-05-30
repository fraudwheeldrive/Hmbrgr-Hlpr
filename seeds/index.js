const seedUser = require('./user-seeds');
const seedLocation = require('./restaurant-seeds');
const seedMenu = require('./ingredient-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUser();
    console.log('--------------');
  
    await seedLocation();
    console.log('--------------');
  
    await seedMenu();
    console.log('--------------');

    process.exit(0);
  };
  
  seedAll();