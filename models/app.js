
//database
const db=require('./database');

db.authenticate()
.then(()=>console.log('database connected'))
.catch(err=>console.log('error:'+err))

