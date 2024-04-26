const sequelize=require("./app");
const Customer=require("./models/customer");
sequelize.sync().then(result =>  {
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});