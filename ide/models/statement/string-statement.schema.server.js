var mongoose = require("mongoose");

module.exports = function() {

    var StringStatementSchema = mongoose.Schema({
        operationType : {type : String, enum : ["SUBSTRING", "SUBSTR", "CONCATENATE", "LENGTH","CHARAT","CHARCODEOF","INDEXOF","LASTINDEXOF",
            "SEARCH","REPEAT","REPLACE","REPLACEALL", "SLICE","LOWERCASE","LOCALELOWERCASE", "UPPERCASE","LOCALEUPPERCASE","TRIM","LOCALECOMPARE","MATCH","SPLIT",
            "STARTSWITH", "ENDSWITH"]},
        input1        : String,
        input2        : String,
        output        : String,
        length        : String,
        start         : String,
        index         : String,
        searchvalue   : String,
        newvalue      : String,
        count         : String
    });

    return StringStatementSchema;
};