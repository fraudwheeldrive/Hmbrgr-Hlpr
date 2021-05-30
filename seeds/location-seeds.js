//const sequelize = require('../config/connection');
const { location } = require("../models");

//id, Restaurant number, restaurant addresss

const locationdata = [
  {
    Id: 1,
    location_name: "Uptown",
    restaurant_address: "123 function rd",
  },
  {
    Id: 2,
    location_name: "Downtown",
    restaurant_address: "456 method crt",
  },
  {
    Id: 3,
    location_name: "Eastown",
    restaurant_address: "890 Variable Blvd",
  },
  {
    Id: 4,
    location_name: "Westown",
    restaurant_address: "246 Array Way",
  },
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;
