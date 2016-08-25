var mongoose = require("mongoose");

module.exports = function() {

    var DateObject = require("./date-input-statement.schema.server")();

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
        year                 : DateObject,
        month                : DateObject,
        day                  : DateObject,
        hours                : DateObject,
        minutes              : DateObject,
        seconds              : DateObject,
        milliseconds         : DateObject,
        date                 : DateObject,
        value1               : DateObject,
        value2               : DateObject,
        operand              : DateObject,
        operand1             : DateObject,
        operand2             : DateObject,
        result               : Object
    });

    return DateStatementSchema;
};
