const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {});

User.hasManyBlog, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Blog };
