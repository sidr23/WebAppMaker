
var mongoose = require("mongoose");

module.exports = function() {

    var DatabaseStatementSchema = mongoose.Schema({
        databaseOperation : {
            label: {type: String, enum: ["Select", "Insert", "Update", "Delete"]}
        },
        collectionName    : String,
        filter : String,
        resultOperation: String
    });

    return DatabaseStatementSchema;
};