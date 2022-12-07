const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//1.GET ALL WORKOUTS
const getWorkouts = async (req,res)=>{
    const workouts =await Workout.find({}).sort({created:-1})

    res.status(200).json(workouts)
}

//2.GET SINGLE WORKOUTS
const getWorkout = async (req,res) =>{
    const { id } = req.params
    const workout = await Workout.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'NO SUCH WORKOUT'})
    }
    
    if (!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

//3.CREATE NEW WORKOUT 
const createWorkOut = async (req,res) => {
    //3.1ADD DOCUMENT TO DATABASE
    const {title, load, reps} = req.body
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})

    }

} 

//DELETE WORKOUT 
const deleteWorkout = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'NO SUCH WORKOUT'})
    }

    const workout = await Workout.findOneAndDelete({_id:id})

    if (!workout){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

//UPDATE WORKOUT 
const updateWorkOut = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'NO SUCH WORKOUT'})
    }

    const workout = await Workout.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if (!workout){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkOut,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkOut
}