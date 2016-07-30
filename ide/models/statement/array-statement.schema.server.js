var mongoose = require("mongoose");

module.exports = function() {

    var ArrayStatementSchema = mongoose.Schema({
        operationType : {type : String, enum : ["CONCAT", "EVERY", "FILL", "FILTER"]}

    });

    return ArrayStatementSchema;
};