const express = require('express')
require('dotenv').config()

//1.EXPRESS APP
const app = express()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//MIDDLEWARE
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//2.ROUTING
app.use('/api/workouts', workoutRoutes)

//CONNECT TO DATABASE
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //3.LISTEN REQUEST
        app.listen(process.env.PORT, () => {
            console.log('Connected to Database')
        })

    })
    .catch((error) => {
        console.log(error)
    })

process.env

