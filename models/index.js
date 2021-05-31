const User = require('./User');
const Restaurant = require('./Restaurant');
const Menu = require('./Menu');

User.hasMany(Restaurant, {
  foreignKey: 'user_id'
});

Menu.belongsTo(Restaurant, {
  foreignKey: 'location',
  onDelete: 'SET NULL'
});



module.exports = { User, Restaurant, Menu };