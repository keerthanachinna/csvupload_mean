const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Csv } = require('../models/csv');

// => localhost:3000/csv/
router.get('/list', (req, res) => {
    Csv.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving csv file :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.post('/add', (req, res) => {
    var blukcsv=req.body.Sheet1;
   
    Csv.insertMany(blukcsv,(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in csv Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


    

module.exports = router;