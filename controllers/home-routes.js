const router = require('express').Router();
const { Blog, User } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlog = await Blog.findAll({
      include: [{ model: User }],
    });
    // console.log(dbBlog);
    const blog = dbBlog.map((blog) =>
          blog.get({ plain: true }));
          console.log(blog);
    res.render('homepage', { blog });
  } catch (err) {
    res.status(500).json(err);
  } 
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


module.exports = router;
