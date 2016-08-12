var q = require("q");

module.exports = function (db) {
    var dbStmtModel = require("./database-statement.model.server")(db);
    var api = {
        execute: execute
    };
    return api;
    var result ="";
    function execute(statement, model){
        var  operand1, operand2, operand3;
        if(statement.input[0]) {
            operand1 = model[statement.input[0].variable];
            if(typeof operand1 === 'undefined') {
                operand1 = statement.input[0].literal;
            }
        }
        if(statement.input[1]) {
            operand2 = model[statement.input[1].variable];
            if(typeof operand2 === 'undefined') {
                operand2 = statement.input[1].literal;
            }
        }
        if(statement.input[2]) {
            operand3 = model[statement.input[2].variable];
            if(typeof operand3 === 'undefined') {
                operand3 = statement.input[2].literal;
            }
        }


        var collection =  db.collection(operand1);


        switch (statement.operation) {
            case 'Select' :
                var temp ="";

                    dbStmtModel.selectRecords(operand1, operand2).then(function (results) {
                        result = results;
                        model[statement.output] = result;
                    }, function (err) {
                        return err;
                    });

                break;
            case 'Insert' :
                var temp ="";

                     dbStmtModel.insertRecords(operand1, operand2).then(function (results) {
                         console.log("results",results);
                        result = results;
                     }, function (err) {
                         return err;
                     });
                model[statement.output] = result;
                break;
            case 'Update' :
                dbStmtModel.updateRecords(operand1, operand2,operand3).then(function (results) {
                    console.log("results",results);
                    result = results;
                }, function (err) {
                    return err;
                });
                break;
            case 'Delete' :
                dbStmtModel.deleteRecords(operand1, operand2).then(function (results) {
                    console.log("results",results);
                    result = results;
                }, function (err) {
                    return err;
                });
                break;
        }
        return null;

    }

};