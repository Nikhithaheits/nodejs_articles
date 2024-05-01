const db = require('./data');
const { User, Article, Comment, Technology, Session,UserArticles, ArticleTechnology } = require('./createTables');

// Define an array of user data
const usersData = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
  { username: 'user3', email: 'user3@example.com', password: 'password3' },
  
  { username: 'user4', email: 'user4@example.com', password: 'password4' },
  { username: 'user5', email: 'user5@example.com', password: 'password5' },
  { username: 'user6', email: 'user6@example.com', password: 'password6' },
  { username: 'user7', email: 'user7@example.com', password: 'password7' }
];



// Array to hold promises for user creation
const userPromises = [];

// Iterate through usersData and create a findOrCreate promise for each user
usersData.forEach(userData => {
  const { username, email, password } = userData;
  const findOrCreatePromise = User.findOrCreate({ where: { username }, defaults: { email, password } })
    .then(([user, created]) => {
      if (created) {
        console.log(`User ${username} inserted successfully`);
      } else {
        console.log(`User ${username} already exists`);
      }
    })
    .catch(err => {
      console.error(`Error inserting sample data for User ${username}:`, err);
    });
  userPromises.push(findOrCreatePromise);
});

// Execute all user creation promises concurrently
Promise.all(userPromises)
  .then(() => {
    console.log('All users inserted successfully');
  })
  .catch(err => {
    console.error('Error inserting users:', err);
  });


  //Articles table insertion
  const articlesData = [
    { title: 'title1',  content: 'content1' },
    { title: 'title2',  content: 'content2' },
    { title: 'title3',  content: 'content3' },
    { title: 'title4',  content :'content4' },
    { title: 'title5',  content: 'content5' },
    { title: 'title6',  content :'content6' }
  ];
  
  // Array to hold promises for user creation
  const articlePromises = [];
  
  // Iterate through usersData and create a findOrCreate promise for each user
  articlesData.forEach(articleData => {
    const {  title, content } = articleData;
    const findOrCreatePromise = Article.findOrCreate({ where: { title }, defaults: {content   } })
      .then(([user, created]) => {
        if (created) {
          console.log(`Article ${title} inserted successfully`);
        } else {
          console.log(`User ${username} already exists`);
        }
      })
      .catch(err => {
        console.error(`Error inserting sample data for articles ${title}:`, err);
      });
    articlePromises.push(findOrCreatePromise);
  });
  Promise.all(articlePromises)
  .then(() => {
    console.log('All articles inserted successfully');
  })
  .catch(err => {
    console.error('Error inserting articles:', err);
  });


  //comments table declaration
  const commentsData = [

    {articleid: 55, userid: 22, content: 'Comment 1 for Article 1' },
  { articleid: 56, userid: 23, content: 'Comment 1 for Article 2' },
  { articleid: 57, userid: 24, content: 'Comment 1 for Article 3' },
  { articleid: 58, userid: 25, content: 'Comment 1 for Article 4'},
  { articleid: 59, userid: 26, content: 'Comment 1 for Article 3' },
  { articleid: 60, userid: 27, content: 'Comment 1 for Article 4'}
   
  ];
  
  // Array to hold promises for user creation
  const commentPromises = [];
  
  // Iterate through usersData and create a findOrCreate promise for each user
  commentsData.forEach(commentData => {
    const { articleid,userid, content } = commentData;
    const findOrCreatePromise = Comment.findOrCreate({ where: { content }, defaults: {articleid,userid  } })
      .then(([user, created]) => {
        if (created) {
          console.log(`comment ${content} inserted successfully`);
        } else {
          console.log(`comment ${content} already exists`);
        }
      })
      .catch(err => {
        console.error(`Error inserting sample data for comments  ${content}:`, err);
      });
    commentPromises.push(findOrCreatePromise);
  });
  
  // Execute all user creation promises concurrently
  Promise.all(commentPromises)
    .then(() => {
      console.log('All comments inserted successfully');
    })
    .catch(err => {
      console.error('Error inserting comments:', err);
    });
  

    //technology table
    const technologiesData = [

      { techname: 'python', domain: 'webdevelopment' },
      { techname: 'java', domain: 'webdevelopment' },
      { techname: 'nodejs', domain: 'webdevelopment' },
      { techname: 'javacript', domain: 'webdevelopment' },
      { techname: 'reactjs', domain: 'webdevelopment' }
    
     
    ];
    
    const technologyPromises = [];
  
  // Iterate through usersData and create a findOrCreate promise for each user
  technologiesData.forEach(technologyData => {
    const { techname, domain } = technologyData;
    const findOrCreatePromise = Technology.findOrCreate({ where: { techname }, defaults: {domain } })
      .then(([user, created]) => {
        if (created) {
          console.log(`comment ${techname} inserted successfully`);
        } else {
          console.log(`comment ${techname} already exists`);
        }
      })
      .catch(err => {
        console.error(`Error inserting sample data for comments  ${techname}:`, err);
      });
      technologyPromises.push(findOrCreatePromise);
  });
  
  // Execute all user creation promises concurrently
  Promise.all(technologyPromises)
    .then(() => {
      console.log('All technologies inserted successfully');
    })
    .catch(err => {
      console.error('Error inserting technologies:', err);
    });
  


//sessions table
    const sessionsData = [

      {userid: 22, token: 'token1', expiry_at: new Date(Date.now() + 3600000) }, // Expiry in 1 hour
  { userid: 23, token: 'token2', expiry_at: new Date(Date.now() + 7200000) }, // Expiry in 2 hours
  { userid: 24, token: 'token3', expiry_at: new Date(Date.now() + 10800000) }, // Expiry in 3 hours
  { userid: 25, token: 'token4', expiry_at: new Date(Date.now() + 14400000) },// Expiry in 4 hours

  { userid: 26, token: 'token5', expiry_at: new Date(Date.now() + 14400000) } // Expiry in 4 hours

    ];
    
    const sessionPromises = [];
  
  // Iterate through usersData and create a findOrCreate promise for each user
  sessionsData.forEach(sessionData => {
    const { userid,token, expiry_at  } = sessionData;
    const findOrCreatePromise = Session.findOrCreate({ where: { token }, defaults: {expiry_at ,userid} })
      .then(([user, created]) => {
        if (created) {
          console.log(`comment ${token} inserted successfully`);
        } else {
          console.log(`comment ${token} already exists`);
        }
      })
      .catch(err => {
        console.error(`Error inserting sample data for comments  ${token}:`, err);
      });
      sessionPromises.push(findOrCreatePromise);
  });
  
  // Execute all user creation promises concurrently
  Promise.all(sessionPromises)
    .then(() => {
      console.log('All sessions inserted successfully');
    })
    .catch(err => {
      console.error('Error inserting sessions:', err);
    });
  //UserArticle table
 
 
  const UserArticleData = [
    { userid: 22, articleid: 55 },
    { userid: 23, articleid: 56 },
    { userid: 24, articleid: 57},
    { userid: 25, articleid: 58 }
  ];
  
  // Array to hold promises for user-article creation
  const userArticlePromises = [];
  
  // Iterate through UserArticleData and create a findOrCreate promise for each UserArticle
  UserArticleData.forEach(userArticleData => {
    const {  userid,articleid } = userArticleData;
    const findOrCreatePromise = UserArticles.findOrCreate({
      where: {userid ,articleid }, // Specify the conditions for finding or creating
      //defaults: userArticleData // Specify the default values if it needs to be created
    })
      .then(([user, created]) => {
        if (created) {
          console.log(`UserArticle inserted successfully`);
        } else {
          console.log(`UserArticle already exists`);
        }
      })
      .catch(err => {
        console.error(`Error inserting sample data for UserArticles:`, err);
      });
    userArticlePromises.push(findOrCreatePromise);
  });
  
  // Execute all user-article creation promises concurrently
  Promise.all(userArticlePromises)
    .then(() => {
      console.log('All UserArticles inserted successfully');
    })
    .catch(err => {
      console.error('Error inserting UserArticles:', err);
    });
//articletechnology
    const ArticleTechnologyData = [

      {articleid:55, techid: 50,   },
    { articleid: 56, techid: 51,  },
    { articleid: 57, techid: 52,  },
    { articleid: 58, techid: 53, }
     
    ];
    
    // Array to hold promises for user creation
    const ArticleTechnologyPromises = [];
    
    // Iterate through usersData and create a findOrCreate promise for each user
ArticleTechnologyData.forEach(ArticleTechnologyData => {
      const { articleid,techid } = ArticleTechnologyData;
      const findOrCreatePromise = ArticleTechnology.findOrCreate({   where: {articleid,techid }, })
        .then(([user, created]) => {
          if (created) {
            console.log(`UserArticle inserted successfully`);
          } else {
            console.log(`UserArticle already exists`);
          }
        })
        .catch(err => {
          console.error(`Error inserting sample data for Articletechnologies :`, err);
        });
    ArticleTechnologyPromises.push(findOrCreatePromise);
    });
    
    // Execute all user creation promises concurrently
    Promise.all(ArticleTechnologyPromises)
      .then(() => {
        console.log('All comments inserted successfully');
      })
      .catch(err => {
        console.error('Error inserting Articletechnologies:', err);
      });
    
      module.exports ={
        usersData,
        articlesData,
        commentsData,
        technologiesData,
        sessionsData,
        UserArticleData,
      }