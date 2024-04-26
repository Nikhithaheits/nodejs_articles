const Sequelize=require('sequelize');
//const db=require('./database');
//const sequelize = require('./database');
const sequelize = require('./database');
const User=sequelize.define('order',{
    userid:{
        type:Sequelize.INTEGER,
        
        allowNull:false,
        primarykey:true,
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    }

    
    
})
module.exports=User;