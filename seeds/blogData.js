const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Blog title 1',
    post_content:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    title: 'Whatever 2',
    post_content:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    title: 'Yolo Tolo',
    post_content:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
