class User {
    constructor(userId, username, email, passwordHash) {
      this.userId = userId;
      this.username = username;
      this.email = email;
      this.passwordHash = passwordHash;
    }
  }
  
  // Assuming you have retrieved the data from PostgreSQL and stored it in a variable named 'userData'
  // 'userData' is an array of objects, where each object represents a row from the 'users' table
  const users = userData.map(row => new User(row.userid, row.username, row.email, row.password_hash));
  
  module.exports = { User }; // Export the class so it can be used in other files
  
