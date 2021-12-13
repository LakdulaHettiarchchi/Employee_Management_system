const { json } = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CurdDB',(err)=>{
        if(!err)
        console.log("MongoDB coneection succeeded....");

        else
        console.log('Error in DB Connection: ' + JSON.stringify(err,undefined,2));
});

module.exports =mongoose;