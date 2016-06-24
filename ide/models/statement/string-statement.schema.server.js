var mongoose = require("mongoose");

module.exports = function() {

    var StringStatementSchema = mongoose.Schema({
        operationType : {type : String, enum : ["SUBSTRING", "CONCATENATE", "LENGTH"]},
        input1        : String,
        input2        : String,
        output        : String,
        length        : Number,
        start         : Number
    });

    return StringStatementSchema;
};