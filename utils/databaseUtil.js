const mysql=require('mysql2');
const pool =mysql.createPool({
    host:"localhost",
    user:"root",
    password:"30Jun2004@#",
    database:"airbnb",
});
module.exports=pool.promise();