const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId  //Id eka valid moongo id ekekda kiyala balnna//

var { Employee } = require('../models/employee');


// =>  localhost:3000/employees/
router.get('/', (req, res) => {

  Employee.find((err, docs) => {
    if (!err) {
      res.send(docs);
    }

    else {
      console.log('Error in Retriving Employees : ' + JSON.stringify(err, undefined, 2));

    }
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))    //An object containing parameter values parsed from the URL path//
    return res.status(400).send(`No record with given Id: ${req.params.id}`);

  
  Employee.findById(req.params.id, (err, doc) => {
    if (!err) { 
      res.send(doc);
    } 

    else {
      console.log('Error in retriving Employee:' + JSON.stringify(err, undefined, 2));
    }


  });

});


router.post('/', (req, res) => {

  var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary


  });

  emp.save((err, doc) => {         //insert data into data base//
    if (!err) {
      res.send(doc);
    }

    else {

      console.log('Error in employee save:' + JSON.stringify(err, undefined, 2));
    }

  });


});

router.put('/:id',(req,res) => {
    if (!ObjectId.isValid(req.params.id))    //An object containing parameter values parsed from the URL path//
     return res.status(400).send(`No record with given Id: ${req.params.id}`);
    
     var emp = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary
  };

  Employee.findByIdAndUpdate(req.params.id, {$set :emp} , {new:true},(err,doc) =>{   //meke new eka true kiyanne update value eka vitark denna kiyala doc ekt(Back to the reponse only updated data)//
    if(!err){
      res.send(doc);
    } 

    else{
      console.log('Error on employee Update:'+JSON.stringify(err,undefined,2));
    }
     
  });

});

router.delete('/:id',(req,res) => {
  if (!ObjectId.isValid(req.params.id))    //An object containing parameter values parsed from the URL path(parmas use karanne Url ekath ekka mokak hari parameter ekak pass karana kota)//
  return res.status(400).send(`No record with given Id: ${req.params.id}`);

  Employee.findByIdAndRemove(req.params.id, (err,doc) => {
       if(!err){
          res.send(doc);
       }
     else{
       console.log('Error in dlete in employee:' + JSON.stringify(err,undefined,2));
     }  
  })

})

module.exports = router;