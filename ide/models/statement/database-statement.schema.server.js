
var mongoose = require("mongoose");

module.exports = function() {

    var DatabaseStatementSchema = mongoose.Schema({
        operation : {
            type: {type: String, enum: ['SELECT', 'INSERT']},
            label: {type: String, enum: ["Select", "Insert", "Update", "Delete"]}
        },
        record            : {literalObject: Object, variable: String},
        collectionName    : {literalString: Object, variable: String},
        filter          : {literalObject: Object, variable: String},
        resultOperation: String
    });

    return DatabaseStatementSchema;
};