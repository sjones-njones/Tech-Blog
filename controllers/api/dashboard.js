const router = require('express').Router();
const { Blog, User } = require('../models');

// GET all posts for individual user

// add a param
router.get('/', async (req, res) => {
  try {
    const dbBlog = await Blog.findByPk(req.params.id, {
      include: [{ model: User }],
          });
    const blog = dbBlogData.get({ plain: true });
    res.render('dashboard', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try { 
    const dishData = await Dish.create({
    dish_name: req.body.dish_name,
    description: req.body.description,
    guest_name: req.body.guest_name,
    has_nuts: req.body.has_nuts,
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(dishData)
} catch (err) {
  res.status(400).json(err);
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