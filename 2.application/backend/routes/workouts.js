const express =require('express')
const Workout = require('../models/workoutModel')
const router =express.Router()
const {
    getWorkouts,
    getWorkout,
    createWorkOut,
    deleteWorkout,
    updateWorkOut
} = require('../controllers/workoutController')


//1.GET WORKOUTS
router.get('/',getWorkouts)

//2.GET SINGLE WOLKOUT
router.get('/:id',getWorkout)

//3.POST NEW WORKOUT
router.post('/',createWorkOut)

//4.DELETE WORKOUT
router.delete('/:id',deleteWorkout)

//5.UPDATE WORKOUT
router.patch('/:id',updateWorkOut)

module.exports = router