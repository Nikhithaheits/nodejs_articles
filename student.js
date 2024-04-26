const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'website',
    password: '8121998103',
    port: 5432, 
});

client.connect();

const createTableQuery = `
    CREATE TABLE student (
        sid SERIAL PRIMARY KEY,
        sname VARCHAR(255),
        sage INT
    );`;

client.query(createTableQuery)
    .then(() => {
        console.log('Table created successfully');
        client.end(); // Move client.end() inside the .then() block
    })
    .catch(error => {
        console.error('Error creating table:', error);
        client.end(); // Move client.end() inside the .catch() block
    });
