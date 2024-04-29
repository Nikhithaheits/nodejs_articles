// Import required modules
//const { DataTypes } = require('sequelize');
const Sequelize  = require('sequelize');
const db = require('./data');

// Define Users table
const User = db.define('user', {
  userid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

// Define Articles table
const Article = db.define('article', {
  articleid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

// Define Comments table
const Comment = db.define('comment', {
  commentid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: Sequelize.TEXT
});

// Define Technology table
const Technology = db.define('technology', {
  techid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  techname: Sequelize.STRING,
  domain: Sequelize.STRING
});

// Define Sessions table
const Session = db.define('session', {
  sessionid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  token: Sequelize.STRING,
  expiry_at: Sequelize.DATE
});

// Define Many-to-Many relationship between Users and Articles
User.belongsToMany(Article, { through: 'UserArticle' });
Article.belongsToMany(User, { through: 'UserArticle' });

// Define Many-to-Many relationship between Articles and Technology
Article.belongsToMany(Technology, { through: 'ArticleTechnology' });
Technology.belongsToMany(Article, { through: 'ArticleTechnology' });

// Define relationships between Comments, Users, and Articles
Comment.belongsTo(User);
User.hasMany(Comment);
Comment.belongsTo(Article);
Article.hasMany(Comment);

// Define relationship between Sessions and Users
Session.belongsTo(User);
User.hasMany(Session);

// Synchronize models with the database
db.sync()
  .then(() => {
    console.log('Tables synchronized successfully');
  })
  .catch(err => {
    console.error('Error synchronizing tables:', err);
  });



// Export models for use in other parts of your application
module.exports = {
  User,
  Article,
  Comment,
  Technology,
  Session
};
