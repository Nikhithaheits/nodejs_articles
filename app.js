const express=require('express');
const exphbs=require('express-handlebars');
const bodyparser=require('body-parser');
const path=require('path');

//database
const sequelize=require('./database');

sequelize.authenticate()
.then(()=>console.log('database connected'))
.catch(err=>console.log('error:'+err))

const app=express();
app.get('/',(req,res)=>res.send('INDEX'));
const PORT=process.env.PORT|| 5000;


