const express = require('express');
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const path = require("path")
const User = require('./models/user')

const app = express();
const PORT = process.env.PORT | 3000;
const static_path = path.join(__dirname, "./public")


dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(static_path))
app.set("view engine", "ejs")


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Database is connected')
})
.catch((error) => {
    console.log(`Database connection failed: ${error}`)
})


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/donate", (req, res) => {
    res.render("donate")
})

app.get("/success", (req, res) => {
    res.render("success")
})

app.post("/donate", async (req, res) => {
    try{
        const data = new User(req.body)
        await data.save()
        res.redirect("/success")
    }
    catch(err){
        res.status(400).send(err)
    }
})
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);