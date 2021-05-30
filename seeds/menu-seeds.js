//const sequelize = require('../config/connection');
const { Menu } = require('../models');

//id, description, ingredients, price, location (store)

// ID
// product_name 
// ingredients 
// price 


const menudata = [

    {
        id: 1, 
        product_name: "hamBurger",
        ingredients: "1 beef patty,ketchup, mmustard, onions, pickles",
        price: 2.49
    },
    {
        id: 2, 
        product_name: "cheeseBurger",
        ingredients: " 1 beef patty,ketchup, mmustard, onions, pickles cheese",
        price: 2.89 
    },
    {
        id: 3, 
        product_name: "grandStan",
        ingredients: "2 beef patties,special sauce, shredded lettuce, onions, pickles, cheese",
        price: 4.49 
    },
    {
        id: 4, 
        product_name: "3/4 - 1 lb aka the fraction burger",
        ingredients: "1 1/4lbs beef patty, ketchup, mmustard, onions, pickles",
        price: 4.49 
    },
    {
        id: 5, 
        product_name: "improbableBurger",
        ingredients: "veggy patty, mayo, red onions, pickles, leaf lettuce",
        price: 5.39 
    },
    {
        id: 6, 
        product_name: "isChicken",
        ingredients: "formed chicken patty, mayo, lettuce",
        price: 4.49 
    },
    {
        id: 7, 
        product_name: "chickenTuggets",
        ingredients: " an array [] of 6 deepfried chicken tenders",
        price: 4.79 
    },
    {
        id: 8, 
        product_name: "functionFries()",
        ingredients: "golden friend potatoes, ligtly salted",
        price: 1.89 
    },
    {
        id: 9, 
        product_name: "sideSalad",
        ingredients: "romain lettuce, iceberg lettuce, spinach, cherry tomatoes, onions",
        price: 2.19 
    },
    {
        id: 10, 
        product_name: "iceCream",
        ingredients: "vanilla flavored soft serve with spoon",
        price: 3.49 
    },


]

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;
