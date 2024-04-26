const express=require('express');
const router=express.Router();
const db=require('./database');
const Users=require('./User');

router.get('/',(req,res) =>
 User.findAll() 
 .then(users=>console.log(users))
 .catch(err=>console.log(err)));

 router.get('/add',(req,res)=>{
    const data={
        userid:1,
        username:'nikhitha',
        email:'nikhi@gmail.com',
        password:'nikhi88'
    }
    let { userid,username,email,password}=data;
    User.create({
        userid,
        username,
        email,
        password
    })
    .then(users=>console.log(users))
    .catch(err=>console.log(err));
 });
module.exports=router;