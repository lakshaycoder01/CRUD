var express = require('express');
var router = express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var Employee = require('../models/userdet.js');

router.get('/read', function(req, res, next) {
  Employee.find(function (err, products) {
    if (err) return next(err);
    res.json({msg:products});
  });
})

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in reteriving the record')}
    })
})

router.post('/create',(req,res)=>{
    let newuser=new Employee({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        jobtype:req.body.jobtype

    });
    newuser.save((err,SavedUser)=>{
        if(err){console.log(err)}
        else{console.log(SavedUser)
            res.send(SavedUser);
        }
    })


})

router.put('/update',(req,res)=>{
    Employee.findById(req.body._id,(err,doc)=>{
        if(err)
            res.send(err)
        doc.firstName=req.body.firstName;
        doc.lastName=req.body.lastName;
        doc.email=req.body.email;
        doc.phone=req.body.phone;
        doc.save((err,docs)=>{
            if(err)
                res.send(err)
            res.send(docs)
        })

    })

}) 

router.delete('/delete/:id',(req,res)=>{
    Employee.deleteOne({_id:req.params._id},(err,doc)=>{
        if(err)
            res.send(err)
        res.send(doc)

    })

})


module.exports=router