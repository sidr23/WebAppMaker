var mongoose = require("mongoose");

module.exports = function() {

    var StringStatementSchema = mongoose.Schema({
        operation : {type : String, enum : ["SUBSTRING", "SUBSTR", "CONCATENATE", "LENGTH","CHARAT","CHARCODEOF","INDEXOF","LASTINDEXOF",
            "SEARCH","REPEAT","REPLACE","REPLACEALL", "SLICE","LOWERCASE","LOCALELOWERCASE", "UPPERCASE","LOCALEUPPERCASE","TRIM","LOCALECOMPARE","MATCH","SPLIT",
            "STARTSWITH", "ENDSWITH"]},
        string1       : require("./input-statement.schema.server")(),
        string2       : require("./input-statement.schema.server")(),
        string3       : require("./input-statement.schema.server")(),
        index         : require("./input-statement.schema.server")(),
        length        : require("./input-statement.schema.server")(),
        count         : require("./input-statement.schema.server")()
    });

    return StringStatementSchema;
};