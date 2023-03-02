const { User } = require('../models');

const userdata = [
  {
    username: 'Shawn',
    password: '123456',
  },
  {
    username: 'Mike',
    password: '123456',
  },
  {
    username: 'John',
    password: '123456',
  },
  {
    username: 'Sarah',
    password: '123456',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
