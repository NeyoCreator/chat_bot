const express =require('express')
const Workout = require('../models/workoutModel')
const router =express.Router()

//1.GET WORKOUTS
router.get('/', (eq,res) => {
    res.json({mssg: 'GET ALL WORKOUTS'})
})

//2.GET SINGLE WOLKOUT
router.get('/:id',(req,res) =>{
    res.json({mssg: 'GET single workout'})
})

//3.POST NEW WORKOUT
router.post('/',async (req,res)=>{
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})

    }
})

//4.DELETE WORKOUT
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'DELETE A WORKOUT'})
})

//5.UPDATE WORKOUT
router.patch('/:id',(eq,res)=>{
    res.json({mssg: 'UPDATE A WORKOUT'})
})

module.exports = router