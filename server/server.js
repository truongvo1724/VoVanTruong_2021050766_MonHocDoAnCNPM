const express = require('express'); 
const app = express(); 
const port = 8080; 
const mysql = require('mysql')
const cors = require('cors')


app.listen(port, function(){
    console.log("Your app running on port " + port);
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'signup',
})

app.post('signup', (req, res) =>{
    const sentFullname = red.body.Fullname
    const sentUsername = red.body.Username
    const sentPassword = red.body.Password
    const sentRePassword = red.body.RePassword
    const sentEmail = red.body.Email

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