const Blog = require('./Blog');
const User = require('./User');

User.hasMany(Blog, {
  foreignKey: 'blogger_id',
});

Blog.belongsTo(User, {
  foreignKey: 'blogger_id',
});

module.exports = { User, Blog };
