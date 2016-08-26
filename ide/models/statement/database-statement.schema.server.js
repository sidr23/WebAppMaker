
var mongoose = require("mongoose");

module.exports = function() {

    var DatabaseStatementSchema = mongoose.Schema({
        operation : {
           type: String, enum: ['SELECT', 'INSERT','UPDATE','DELETE']
        },
        record            : {literalObject: Object, variable: String},
        collectionName    : {literalString: Object, variable: String},
        filter          : {literalObject: Object, variable: String},
        resultOperation: String
    });

    return DatabaseStatementSchema;
};