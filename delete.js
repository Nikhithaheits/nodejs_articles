const db = require('./data');
const { User, Article, Comment, Technology, Session,UserArticles,ArticleTechnology } = require('./createTables');
//const db = require('./insertdata');

async function deleteAllRows() {
  try {
    // Delete all rows from the Users table
    await User.destroy({
      where: {},
      //truncate: true // Truncate ensures that it resets auto-increment primary keys
    });

    console.log('All rows deleted from the Users table');

    // Delete all rows from the Articles table
   await Article.destroy({
      where: {},
      //truncate: true
    });
    
    console.log('All rows deleted from the Articles table');

    // Delete all rows from the Comments table
    await Comment.destroy({
      where: {},
      truncate: true
    });
    
    console.log('All rows deleted from the Comments table');

    // Delete all rows from the Technology table
    await Technology.destroy({
      where: {},
     // truncate: true
    });
    
    console.log('All rows deleted from the Technology table');

    // Delete all rows from the Session table
    await Session.destroy({
      where: {},
      truncate: true
    });
    
    console.log('All rows deleted from the Session table');
  } catch (error) {
    console.error('Error deleting rows:', error);
  }
}

// Call the function to delete all rows
deleteAllRows();
