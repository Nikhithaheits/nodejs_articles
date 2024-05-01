const Sequelize  = require('sequelize');
const db = require('./data');
const {User} = require('./createTables');
 
// Update a user
User.update({ username: 'RamaRao' }, { where: { userid: 22 } }).then(() => {
    console.log('User updated successfully');
  }).catch(err => {
    console.error('Error updating user:', err);
  });