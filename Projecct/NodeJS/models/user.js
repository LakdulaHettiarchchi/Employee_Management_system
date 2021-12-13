const mongoose = require('mongoose');
// 
const bcrypt = require('bcryptjs');
const { Employee } = require('./employee');

var User = mongoose.model('User',{
 
      full_name :{
          type:String,
          required : 'Full name can\'t be empty' 
        },
      
      email :{
          type:String,
          required : 'Email can\'t be empty' ,
          unique: true,
          // emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 } ,
      
      password : {
          type:String,
          required : 'password cna\'t be empty' ,
          minlength :[4, 'Password must be atleast 4 character long']
      },

      saltSecret :  String
      
});

// Employee.path('email').validate((val)=>{
//      emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//      return emailRegex.test(val);

// }, 'Invalid e-mail.');


//event
// User.pre('save', function(next){
//     bcrypt.genSalt(10, (err,salt)=>{
//         bcrypt.hash(this.password, salt, (err,hash)=>{
//             this.password =hash;
//             this.saltSecret = salt;
//             next();
//         });
//     });
// });


module.exports = {User};