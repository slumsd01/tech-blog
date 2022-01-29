const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'slumsd01',
        email: 'sarah@email.com',
        password: 'password'
    },
    {
        username: 'alesmonde0',
        email: 'nwestnedge0@cbc.ca',
        password: 'password'
    },
    {
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password'
    },
    {
        username: 'iboddam2',
        email: 'cstoneman2@last.fm',
        password: 'password'
    },
    {
        username: 'dstanmer3',
        email: 'ihellier3@goo.ne.jp',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;