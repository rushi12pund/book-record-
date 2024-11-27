const express = require("express");
const nodemon = require("nodemon");
const {users} = require("./data/users.json")
const app = express();
const PORT = 8081;

app.use(express.json());


app.get("/",(req,res) => {
    res.status(200).json({
        message:"server is up and running :-)",
    })
})

// Route: /users
// method: get
// Description : get all users
// access: Public
// parameters:none

app.get("/users",(req,res) => {
    res.status(200).json({
        success:true,
        data:users,
    });
});

app.get("*",(req,res) => {
    res.status(404).json({
        message:"This root does not exist :-)",
        data:"hey",
    })
})





app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})