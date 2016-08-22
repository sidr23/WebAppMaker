var mongoose = require("mongoose");

module.exports = function() {

    var StringStatementSchema = mongoose.Schema({
        operation : {type : String, enum : ["SUBSTRING", "SUBSTR", "CONCATENATE", "LENGTH","CHARAT","CHARCODEOF","INDEXOF","LASTINDEXOF",
            "SEARCH","REPEAT","REPLACE","REPLACEALL", "SLICE","LOWERCASE","LOCALELOWERCASE", "UPPERCASE","LOCALEUPPERCASE","TRIM","LOCALECOMPARE","MATCH","SPLIT",
            "STARTSWITH", "ENDSWITH"]},
        string1       : Object,
        string2       : Object,
        string3       : Object,
        index         : Object,
        length        : Object,
        count         : Object
    });

    return StringStatementSchema;
};