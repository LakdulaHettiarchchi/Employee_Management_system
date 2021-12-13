const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var userController = require('./controllers/userController');
const cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000 , ()=> console.log('Server started at port:3000'));

app.use('/employees', employeeController); //middileware function //
app.use('/users', userController);





