const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all Blog for homepage
router.get('/', async (req, res) => {
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
    console.log(blogs);

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
router.get('/dashboard', async (req, res) => {
  try {
    if (req.session.logged_in) {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Blog }],
      });

      const user = userData.get({ plain: true });
      console.log(user);
      res.render('dashboard', { ...user, loggedIn: true });
    } else {
      res.render('login');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get blog by id
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        { model: Comment },
      ],
    });

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

//Edit blog
router.get('/edit-post/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });
    res.render('edit-post', {
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
