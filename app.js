const express = require('express');
const mysql = require('mysql');
const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'my-secret-pw',
    database: 'nodejs-login',
    port: 3307
});
db.connect((error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("mysql conected")
    }
})
app.get("/",(req, res) => {
    res.send("<h1>Homepage</h1>")
});
app.listen(5002,()=>{
    console.log("sever log 5002");
})