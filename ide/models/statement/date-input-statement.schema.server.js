/**
 * Created by ameyapandilwar on 8/25/16.
 */

var mongoose = require("mongoose");

module.exports = function() {

    var DateInputStatementSchema = mongoose.Schema({
        variable       : Object,
        literal        : Object
    });
    return DateInputStatementSchema;
};