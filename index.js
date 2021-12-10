const express = require('express');
const app=express();
app.use(express.json());
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

mongoose.connect('mongodb+srv://mcauser:mcauser123@mca.fhv8e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


mongoose.connection.on('error',err => {
    console.log('connection failed');
});

mongoose.connection.on('connected',connected =>{
    console.log('connected with database');
});

const carroute = require('./Routes/car.js')
app.use(bodyparser.urlencoded({extends:false}));
app.use(bodyparser.json());

app.use('/',carroute);
app.listen(5000, () => {
    console.log('Listing On Port 5000')
})

app.get('/' ,(req, res) => {
    res.json({message : "Api is Working"})
})
