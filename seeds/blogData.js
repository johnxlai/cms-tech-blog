const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Printemps',
    post_by: 'Shawn Paredes',
    post_content:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    post_date: 'June 21, 2021 17:00:00',
  },
  {
    title: 'Whatever 2',
    post_by: 'Micheal Jordan',
    post_content:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    post_date: 'June 21, 2021 17:00:00',
  },
  {
    title: 'Yolo Tolo',
    post_by: 'Chase Sky',
    post_content:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    post_date: 'June 21, 2021 17:00:00',
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
