// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Menu extends Model {}

// set up fields and rules for Product model
Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false   
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
       validate: {
        isDecimal: true        
      }
    },
    location: {
      type: DataTypes.INTEGER,
      references: {
        model: 'restaurant',
        key: 'id'
      }
    }  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu',
  }
);

module.exports = Menu;