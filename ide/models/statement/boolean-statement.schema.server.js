var mongoose = require("mongoose");

module.exports = function() {

    var BooleanStatementSchema = mongoose.Schema({
        operation : {type : String, enum : ['AND', 'OR', 'XOR', 'NOT', 'NAND','NOR', 'EVAL']},
        operand1  : Object,
        operand2  : Object
    });

    return BooleanStatementSchema;
};