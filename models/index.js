const User = require('./User');
const Menu = require('./Menu');
const Restaurant = require('./Restaurant')

User.hasMany(Restaurant, {
  foreignKey: 'user_id'
});

Menu.belongsTo(Restaurant, {
  foreignKey: 'location',
  onDelete: 'SET NULL'
});

module.exports = { User, Restaurant, Menu };