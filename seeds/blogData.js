const { Blog } = require('../models');

const blogData = [
  {
    title: 'HTML',
    post: 'I like it',
    blogger_id: 1,
  },
    {
    title: 'CSS',
    post: 'I like it',
    blogger_id: 1,
  },
  {
    title: 'JS',
    post: 'I like it',
    blogger_id: 2,
  },
    {
    title: 'Inquirer ',
    post: 'I like it',
    blogger_id: 3,
  },  {
    title: 'HTML',
    post: 'I like it',
    blogger_id: 2,
  },
    {
    title: 'CSS',
    post: 'I like it',
    blogger_id: 3,
  },  {
    title: 'HTML',
    post: 'I like it',
    blogger_id: 1,
  },
    {
    title: 'CSS',
    post: 'I like it',
    blogger_id: 1,
  },  {
    title: 'HTML',
    post: 'I like it',
    blogger_id: 1,
  },
    {
    title: 'CSS',
    post: 'I like it',
    blogger_id: 1,
  },

];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
