const express =require('express')
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
router.post('/',(req,res)=>{
    res.json({mssg: 'POST NEW WORKOUT'})
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