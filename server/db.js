const mysql= require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user :'root',
    database :'vjezbanode2',
    password :'cocacola101'
});

module.exports=pool.promise();




