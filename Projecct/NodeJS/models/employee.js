const mongoose = require('mongoose');



var Employee = mongoose.model('Employee', {  //**colloection eke pural name eka model ekt danna oni**//          

    name :{ type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: String }
});

module.exports = {Employee};
