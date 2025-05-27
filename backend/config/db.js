const mysql=require('mysql2/promise');

const mySqlPool=mysql.createPool({
  host: 'localhost',
    user: 'root',      
    password: 'fast',  
    database: 'sqa-db' ,
    
  });
  module.exports=mySqlPool;
  


