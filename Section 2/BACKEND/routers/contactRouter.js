const express = require('express');
const router = express.Router();
const Model = require('../models/contactModel');
router.post('/add', (req,res) => {
    console.log(req.body);

     //saving the data to mongodb
     new Model(req.body).save()
     .then((result) => {
         res.json(result);
         
     }).catch((err) => {
         console.log(err);
         res.status(500).json(err);
         
     });
});

//getall
router.get('/getall', (req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
});
//getid
router.get('/getbyid', (req,res) => {
    console.log(req.params.id);
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
});


module.exports = router;