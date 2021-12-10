const mongoose = require('mongoose');

const carschema = new mongoose.Schema({
        _id:mongoose.Schema.Types.ObjectId,
        ptitle : String,
        price : String,
        categoryid: [String],
        companyid : String,
        sellerid : [String]
})

module.exports = mongoose.model('Car',carschema);