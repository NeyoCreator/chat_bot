const express = require('express')
require('dotenv').config()

//1.EXPRESS APP
const app = express()

//MIDDLEWARE
app.use((req, res,next) => {
    console.log(req.path, req.method)
    next()
})

//2.ROUTING
app.get('/', (req, res)=>{
    res.json({mssg:'welcome to the app'})
})

//3.LISTEN REQUEST
app.listen(process.env.PORT, ()=> {
    console.log('listening on port : ',process.env.PORT)
})

process.env

