const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Updating blog post
router.put('/update/:id', withAuth, async (req, res) => {
  try {
    const updateBlog = await Blog.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updateBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//New comment
router.post('/comment/:id', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      body: req.body.body,
      blog_id: req.params.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
