// import models

const Product = require('./Location');
const Category = require('./Menu');


// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "product_tag_id",
  foreignKey: "product_id"
})



module.exports = {
  Location,
  Menu,
  
};