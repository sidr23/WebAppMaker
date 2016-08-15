var mongoose = require("mongoose");

module.exports = function() {

    var NumberStatementSchema = mongoose.Schema({
        operation : {type : String, enum : ['ADDITION', 'SUBTRACTION', 'MULTIPLICATION', 'DIVISION', 'GREATER_THAN',
            'GREATER_THAN_EQUAL_TO', 'LESSER_THAN', 'LESSER_THAN_EQUAL_TO', 'EQUAL_TO', 'POWER', 'LOGARITHM', 'ROUND',
            'ABSOLUTE', 'EXPONENTIAL', 'COS', 'SIN', 'TAN', 'CEIL', 'FLOOR', 'SQRT', 'VARIABLE']},
        operand1        : String,
        operand2        : String
    });

    return NumberStatementSchema;
};