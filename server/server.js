const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res)=>{
    const sql = "INSERT INTO `login` (`fullname`, `username`, `password`, `repassword`, `email`) VALUES ?";
    const values = [
        req.body.fullname,
        req.body.username,
        req.body.password,
        req.body.repassword,
        req.body.email
    ]
    db.query(sql,[values], (err,data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    });
})


app.listen(8081, ()=>{
    console.log("listenning")
})