const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//New comment
router.post('/:id', withAuth, async (req, res) => {
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
