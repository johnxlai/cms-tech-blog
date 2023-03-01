const router = require('express').Router();
const { Blog, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all Blog for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogs = dbBlogData.map((singlePost) =>
      singlePost.get({ plain: true })
    );

    res.render('homepage', {
      blogs,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

//Get dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    res.render('dashboard', { hello: 'john' });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get blog by id
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    const blog = blogData.get({ plain: true });
    console.log(blog);

    res.render('blog', {
      ...blog,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//If user is login in redirect to home else go to login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
