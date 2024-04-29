// Import required modules
const Sequelize  = require('sequelize');

// Initialize Sequelize with your PostgreSQL database credentials
const db = new Sequelize('web', 'postgres', 'chinnu', {
  host: 'localhost',
  dialect: 'postgres'
});
db.authenticate()
.then(()=>console.log('database connected'))
.catch(err=>console.log('error:'+err))


// Export the initialized Sequelize instance
module.exports = db;
