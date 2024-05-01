// Import required modules

const Sequelize  = require('sequelize');
const db = require('./data');

//  Users table
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

  //Articles table
const Article = db.define('article', {
  articleid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

//  Comments table
const Comment = db.define('comment', {
  commentid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  /*userid: {
    type: Sequelize.INTEGER,
    references: {
      model: 'User', // This refers to the table name in the database
      key: 'userid'  // This refers to the column name in the referenced table
    }
  },
  articleid: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Article', // This refers to the table name in the database
      key: 'articleid'  // This refers to the column name in the referenced table
    }
  },*/
  content: Sequelize.TEXT
});

User.hasMany(Comment, { foreignKey: 'userid' });
Comment.belongsTo(User, { foreignKey: 'userid' });

Article.hasMany(Comment ,{ foreignKey: 'articleid' });
Comment.belongsTo(Article, { foreignKey: 'articleid' });
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

// Sessions table
const Session = db.define('session', {
  sessionid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userid: {
    type: Sequelize.INTEGER,
    references: {
      model: 'User', // This refers to the table name in the database
      key: 'userid'  // This refers to the column name in the referenced table
    }
  },
  token: Sequelize.STRING,
  expiry_at: Sequelize.DATE
 
});
User.hasMany(Session, { foreignKey: 'userid' });
Session.belongsTo(User, { foreignKey: 'userid' });
// Many-to-Many relationship between Users and Articles
const UserArticles=db.define('UserArticle',{
 
  
})


User.belongsToMany(Article, { through: UserArticles,foreignKey:'userid' });
Article.belongsToMany(User, { through: UserArticles,foreignKey:'articleid'});

//  Many-to-Many relationship between Articles and Technology

const ArticleTechnology=db.define('ArticleTechnology',{
  
  //articleid:{type:Sequelize.INTEGER,references:{model:Article}},
  //techid:{type:Sequelize.INTEGER,references:{model:Technology}}
})
Article.belongsToMany(Technology, { through: 'ArticleTechnology',foreignKey:'articleid' });
Technology.belongsToMany(Article, { through: 'ArticleTechnology',foreignKey:'techid' });

  //relationships between Comments, Users, and Articles
//Comment.belongsTo(User);
//User.hasMany(Comment);
//Comment.belongsTo(Article);
//Article.hasMany(Comment);

//  relationship between Sessions and Users

// Define the association in the Session model

//Session.belongsTo(User);
//User.hasMany(Session);

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
  Session,
  UserArticles,
 ArticleTechnology
};
