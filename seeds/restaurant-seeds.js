//const sequelize = require('../config/connection');
const { Restaurant } = require("../models");

//id, Restaurant number, restaurant addresss

//id
//restaurant_number:
//address
//user_id 

const restaurantdata = [
  {
    Id: 1,
    restaurant_number: 4,
    address: "123 function rd, Toronto Ontario",
    user_id: 1
  },
  {
    Id: 2,
    restaurant_number: 4,
    address: "456 method crt, Milton Ontario",
    user_id: 1

  },
  {
    Id: 3,
    restaurant_number: 4,
    address: "890 Variable Blvd, London Ontario",
    user_id: 1 
  },
  {
    Id: 4,
    restaurant_number: 4,
    address: "246 Array Way, Missisauga Ontario",
    user_id: 1
    
  }
];

const seedLocation = () => Restaurant.bulkCreate(restaurantdata);

module.exports = seedLocation;
