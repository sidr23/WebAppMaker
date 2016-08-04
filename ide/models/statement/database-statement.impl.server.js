
module.exports = function () {

    var mongojs  = require('mongojs');

    var connectionString = 'mongodb://127.0.0.1:27017/wam';
    var dbName = process.env.OPENSHIFT_APP_NAME || 'wam';

    if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
    }


    var db = mongojs(connectionString);

    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model){
        var  operand1, operand2;
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


        console.log(operand1);
        console.log(operand2);
        var collection =  db.collection(operand1);


        switch (statement.operation) {
            case 'Select' :
                model[statement.operation] = "";
                collection.find(operand2,
                function(err,docs){
                    model[statement.operation] = docs;
                });
                break;
            case 'Insert' :
                collection.insert(operand2);
                model[statement.operation] = "";
                collection.find(operand2,
                    function(err,docs){
                        model[statement.operation]= docs;
                    });
                break;
            //case 'Update' :
            //    model[statement.output] = operand1 - operand2;
            //    break;
            //case 'Delete' :
            //    model[statement.output] = operand1 * operand2;
            //    break;
        }

    }

};