//const sequelize = require('../config/connection');
const { location } = require("../models");

//id, Restaurant number, restaurant addresss

const restaurantdata = [
  {
    Id: 1,
    location_name: "Toronto",
    restaurant_address: "123 function rd",
  },
  {
    Id: 2,
    location_name: "Missisauga",
    restaurant_address: "456 method crt",
  },
  {
    Id: 3,
    location_name: "Milton",
    restaurant_address: "890 Variable Blvd",
  },
  {
    Id: 4,
    location_name: "London",
    restaurant_address: "246 Array Way",
  },
];

const seedLocation = () => Location.bulkCreate(restaurantdata);

module.exports = seedLocation;
