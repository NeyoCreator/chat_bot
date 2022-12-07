const Workout = require('../models/workoutModel')

//1.GET ALL WORKOUTS
const getWorkouts = async (res,req)=>{
    res.json({mssg: 'GET ALL WORKOUTS'})    
}

//2.GET SINGLE WORKOUTS

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

//UPDATE WORKOUT 

module.exports = {
    createWorkOut
}