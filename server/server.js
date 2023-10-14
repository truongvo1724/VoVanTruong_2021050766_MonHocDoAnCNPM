const express = require('express'); 
const app = express(); 
const port = 8080; 
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors());
app.listen(port, function(){
    console.log("Your app running on port " + port);
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'signup',
})

app.post('/signup', (req, res) =>{
    const sentFullname = req.body.Fullname
    const sentUsername = req.body.Username
    const sentPassword = req.body.Password
    const sentRePassword = req.body.RePassword
    const sentEmail = req.body.Email

    const SQL = 'INSERT INTO login(fullname,username,password,repassword,email) VALUES (?,?,?,?,?)'

    const Values = [sentFullname,sentUsername,sentPassword,sentRePassword,sentEmail]

    db.query(SQL, Values, (err, results)=>{
        if(err){
            console.log('KHONG thanh cong')
                res.send(err)
        }
        else{
            console.log('thanh cong')
            res.send({message:'thanh cong'})
        }
    })
})

app.post('/login', (req, res)=>{
    const sentloginUsername = req.body.loginUsername
    const sentloginPassword = req.body.loginPassword


    const SQL = 'SELECT *FROM login where username = ? && password = ?'

    const Values = [sentloginUsername,sentloginPassword]

    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length >0){
            res.send(results)
        }
        else{
            res.send({message: "username hoac mat khau sai"})
        }
    })
})