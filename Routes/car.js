const express = require("express");
const router = express.Router();
router.use(express.json());
const carDetails = require("../carDetails");
const Car = require('../model/cardata.js');
const mongoose = require('mongoose');

//GET REQUEST
router.get('/api/carDetails',(req,res) => {
    Car.find()
    .then(result=>{
        res.status(200).json({
            carData:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

//GET REQUEST BY ID
router.get('/api/carDetails/:id',(req,res,next)=>{
    console.log(req.params.id);
    Car.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            car:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

//POST REQUEST
router.post('/api/carDetails',(req,res) => {
    const car = new Car({
        _id:new mongoose.Types.ObjectId,
        car_name : req.body.car_name,
        price : req.body.price,
        model_name: req.body.model_name,
        number_of_seater : req.body.number_of_seater,
        number_of_doors : req.body.number_of_doors,
        fuel_type : req.body.fuel_type,
        sellerid : req.body.sellerid
    })
    car.save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            NewProduct:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

//PUT REQUEST
router.put('/api/carDetails/:id', (req ,res) => {
    Car.findOneAndUpdate({_id:req.params.id},{
        $set:{      
            car_name : req.body.car_name,
            price : req.body.price,
            model_name: req.body.model_name,
            number_of_seater : req.body.number_of_seater,
            number_of_doors : req.body.number_of_doors,
            fuel_type : req.body.fuel_type,
            sellerid : req.body.sellerid
        }
    })
    .then(result=>{
        res.status(200).json({
            Message:'Car Update....'
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

//DELETE REQUEST
router.delete("/api/carDetails/:id" , (req ,res) => {
    Car.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            Message:'Car Deleted....'
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;