var mongoose = require("mongoose");

module.exports = function() {

    var obj = require("./date-input-statement.schema.server")();

    var DateStatementSchema = mongoose.Schema({
        operation: {
            type: String,
            enum: [
                "NEW_DATE",
                "DATE_FROM_STRING",
                "DATE_FROM_MILLISECONDS",
                "DATE_FROM_PARAMETERS",
                "ADD",
                "SUBTRACT",
                "ADD_DATES",
                "SUBTRACT_DATES",
                "TO_UTC_FORMAT",
                "TO_LOCAL_FORMAT"
            ]
        },
        dateString           : String,
        year                 : obj,
        month                : obj,
        day                  : obj,
        hours                : obj,
        minutes              : obj,
        seconds              : obj,
        milliseconds         : obj,
        date                 : obj,
        value1               : obj,
        value2               : obj,
        operand              : obj,
        operand1             : obj,
        operand2             : obj,
        result               : obj
    });

    return DateStatementSchema;
};
