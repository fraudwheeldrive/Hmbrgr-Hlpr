const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {}
//need pword validation 


User.init(
    {
      Id:{

      },
      username: {

      },

      email: {

      },

      password: {

      }  
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
    }
  );
  
  module.exports = User;