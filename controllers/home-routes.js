const router = require('express').Router();
const { Blog } = require('../models');
// Import the custom middleware
// const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll();

    const blogs = dbBlogData.map((singlePost) =>
      singlePost.get({ plain: true })
    );

    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get blog by id
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          // model: User,
          attributes: ['title'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });
    console.log(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
