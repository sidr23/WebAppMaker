var mongoose = require("mongoose");

module.exports = function() {

    var ArrayStatementSchema = mongoose.Schema({
        operationType : {type : String, enum : ["CONCAT", "EVERY", "FILL", "FILTER", "FIND",
            "FINDINDEX", "FOREACH", "INDEXOF", "ISARRAY", "JOIN", "LASTINDEXOF", "MAP", "POP", "PUSH", "REDUCE",
            "REDUCERIGHT", "SHIFT", "SLICE", "SOME", "SORT", "SPLICE", "TOSTRING", "UNSHIFT", "VALUEOF"]}

    });

    return ArrayStatementSchema;
};