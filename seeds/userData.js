const { User } = require('../models');

const userdata = [
  {
    username: 'shawn',
    password: '123456',
  },
  {
    username: 'mike',
    password: '123456',
  },
  {
    username: 'sarah',
    password: '123456',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
