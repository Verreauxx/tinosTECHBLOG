const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'bill',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'bob',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'brad',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'brandon',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'bryce',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'jack',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'john',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'jayce',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'jill',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jerry',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
