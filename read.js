
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'website',
    password: 'chinnu',
    port: 5432,
});

client.connect();
client.query('select * from articles',(err,result)=>{
    if(!err){
        console.log(result.rows);
    }
    client.end();






























    
}); // Added closing parenthesis here
