//const sequelize = require('../config/connection');
const { Restaurant } = require("../models");

//id, Restaurant number, restaurant addresss

//id
//restaurant_number:
//address
//user_id 

const restaurantdata = [
  {
    restaurant_number: '123-456-789',
    city: "Toronto",
    address: "123 function rd, Toronto Ontario",
    user_id: 1
  },
  {
    restaurant_number: '128-477-7809',
    city: "Milton",
    address: "456 method crt, Milton Ontario",
    user_id: 1
  },
  {
    restaurant_number: '173-486-7909',
    city: "London",
    address: "890 Variable Blvd, London Ontario",
    user_id: 1 
  },
  {
    restaurant_number: '122-486-789',
    city: "Missisauga",
    address: "246 Array Way, Missisauga Ontario",
    user_id: 1
  }
];

const seedLocation = () => Restaurant.bulkCreate(restaurantdata);

module.exports = seedLocation;
