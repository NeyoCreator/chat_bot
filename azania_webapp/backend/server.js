const express = require('express')
const app = express()

app.get("/api", (req,res) => {
    res.json({"users": ["UserOne","UserTwo","UsertHREE"]})
})

app.listen(5000, ()=>{console.log("Sever started on port 5000")})