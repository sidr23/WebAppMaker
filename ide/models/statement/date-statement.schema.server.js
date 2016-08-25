var mongoose = require("mongoose");

module.exports = function() {

    var DateStatementSchema = mongoose.Schema({
        dateOperation : {
            label: {
                type : String,
                enum : [
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
            }
        },
        dateString           : String,
        year                 : Object,
        month                : Object,
        day                  : Object,
        hours                : Object,
        minutes              : Object,
        seconds              : Object,
        milliseconds         : Object,
        date                 : Object,
        value1               : Object,
        value2               : Object,
        operand              : Object,
        operand1             : Object,
        operand2             : Object,
        resultDateOperation  : String
    });

    return DateStatementSchema;
};
