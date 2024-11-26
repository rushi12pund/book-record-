const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

app.get("/",(req,res) => {
    res.status(200).json({
        message:"server is up and running :-)",
    })
})
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})