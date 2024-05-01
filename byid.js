

const readline = require('readline'); 
const db = require('./data');
const { User} = require('./createTables');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user to enter the user ID

rl.question('Enter the user ID: ', async (userIdInput) => {
  const userId = parseInt(userIdInput);
  if (isNaN(userId)) {
    console.log('Invalid user ID. Please enter a valid number.');
    rl.close();
    return;
  }

  try {
    // Fetch user by user ID
    const user = await User.findByPk(userId);
    if (user) {
      console.log('User details:');
      console.log('User ID:', user.userid);
      console.log('Username:', user.username);
      console.log('Email:', user.email);
      console.log('password:', user.password);
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  rl.close();
});