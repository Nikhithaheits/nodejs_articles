const db = require('./data');
const { User, Article, Comment, Technology, Session } = require('./createTables');

// Define an array of user data
const usersData = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
  { username: 'user3', email: 'user3@example.com', password: 'password3' },
  { username: 'user4', email: 'user4@example.com', password: 'password4' }
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
    { title: 'title4',  content :'content4' }
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

    {articleid: 1, userid: 1, content: 'Comment 1 for Article 1' },
  { articleid: 2, userid: 2, content: 'Comment 1 for Article 2' },
  { articleid: 3, userid: 3, content: 'Comment 1 for Article 3' },
  { articleid: 4, userid: 4, content: 'Comment 1 for Article 4'}
   
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
      { techname: 'nodejs', domain: 'webdevelopment' }
    
     
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

      { userid: 1, token: 'token1', expiry_at: new Date(Date.now() + 3600000) }, // Expiry in 1 hour
  { userid: 2, token: 'token2', expiry_at: new Date(Date.now() + 7200000) }, // Expiry in 2 hours
  { userid: 3, token: 'token3', expiry_at: new Date(Date.now() + 10800000) }, // Expiry in 3 hours
  { userid: 4, token: 'token4', expiry_at: new Date(Date.now() + 14400000) } // Expiry in 4 hours

     
    ];
    
    const sessionPromises = [];
  
  // Iterate through usersData and create a findOrCreate promise for each user
  sessionsData.forEach(sessionData => {
    const { token, expiry_at  } = sessionData;
    const findOrCreatePromise = Session.findOrCreate({ where: { token }, defaults: {expiry_at } })
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
  