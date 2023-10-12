const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send('this is backend serve api ');
});

app.listen(process.env.PORT,()=>{
    console.log(`sever started running on ${process.env.PORT}`)
})
