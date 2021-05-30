const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Restaurant extends Model {}

Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    restaurant_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
<<<<<<< HEAD:models/Location.js
      Restaurant_address: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
=======
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
>>>>>>> 516d2ba1c7ce059abe1211798a0bfee5b2e90744:models/Restaurant.js
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'restaurant',
  }
);

module.exports = Restaurant;