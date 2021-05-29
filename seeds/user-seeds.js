const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        Username: 'headhmbrgr',
        email: 'owner@hmbrgr.com',
        password: 'password123'
    },
    {
        Username: 'Manager1',
        email: 'manager@hmbrgr.com',
        password: 'password123'
    },
    {
        Username: 'TeamLead',
        email: 'Teamlead@hmbrgr.com',
        password: 'password123'
    },
    {
        Username: 'SocialMedia',
        email: 'socialmedia@hmbrgr.com',
        password: 'password123'
    }
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;


