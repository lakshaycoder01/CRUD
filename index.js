const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const {mongoose}= require('./db.js');

//var index=require('./controller/index')
var employeeController=require('./controller/Users')


var app=express();
app.use(bodyParser.json());
app.use(cors()); 

var port = process.env.PORT || 3000;
app.listen(port,()=>console.log('Server start at:'+port))

//app.use('/',index)
app.use('/user', employeeController)