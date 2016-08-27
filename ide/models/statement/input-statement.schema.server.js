
/**
 * Created by shrav on 8/23/2016.
 */
var mongoose = require("mongoose");

module.exports = function() {

    var InputStatementSchema = mongoose.Schema({
        variable       : String,
        literal        : String
    });
    return InputStatementSchema;
};
