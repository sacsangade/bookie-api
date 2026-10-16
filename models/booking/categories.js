const mongoose = require('mongoose');

const bookingcategoriesSchema = new mongoose.Schema({
    categoryid: {
        unique:true,
        type: Number,
    },
    categorytitle: {
        type: String,
    },
    categorydescription: {
        type: String,
    },
   
});

module.exports = mongoose.model('bk_booking_categories', bookingcategoriesSchema);