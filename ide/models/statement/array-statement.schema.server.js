var mongoose = require("mongoose");

module.exports = function() {

    var ArrayStatementSchema = mongoose.Schema({
        operationType : {type : String, enum : ["CONCAT", "PUSH", "POP","MAP","REVERSE",
            "FOREACH"]},
        input1        : [
            {
                element: String
            }
        ],
        input2        : [
            {
                element: String
            }
        ],
        output        : [
            {
                element: String
            }
        ]
    });

    return ArrayStatementSchema;
};