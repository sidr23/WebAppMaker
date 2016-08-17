var q = require("q");

module.exports = function (db) {
    var dbStmtModel = require("./database-statement.model.server")(db);
    var api = {
        execute: execute
    };
    return api;
    var result ="";
    function execute(statement, model){
        var  collectionName, filter, record;
        if(statement.databaseStatement.collectionName) {
            collectionName = model[statement.databaseStatement.collectionName.variable];
            if(typeof collectionName === 'undefined') {
                collectionName = statement.databaseStatement.collectionName.literalString;
            }
        }
        if(statement.databaseStatement.filter) {
            filter = model[statement.databaseStatement.filter.variable];
            if(typeof filter === 'undefined') {
                filter = statement.databaseStatement.filter.literalObject;
            }
        }
        if(statement.databaseStatement.record) {
            record = model[statement.databaseStatement.record.variable];
            if(typeof record === 'undefined') {
                record = statement.databaseStatement.record.literalObject;
            }
        }


        var collection =  db.collection(collectionName);


        switch (statement.databaseStatement.operation.type) {
            case 'SELECT' :
                var temp ="";

                    dbStmtModel.selectRecords(collectionName, filter).then(function (results) {
                        result = results;
                        model[statement.output] = result;
                    }, function (err) {
                        return err;
                    });

                break;
            case 'INSERT' :
                var temp ="";

                     dbStmtModel.insertRecords(collectionName, record).then(function (results) {
                         console.log("results",results);
                        result = results;
                     }, function (err) {
                         return err;
                     });
                model[statement.output] = result;
                break;
            case 'UPDATE' :
                dbStmtModel.updateRecords(collectionName, filter,record).then(function (results) {
                    console.log("results",results);
                    result = results;
                }, function (err) {
                    return err;
                });
                break;
            case 'DELETE' :
                dbStmtModel.deleteRecords(collectionName, filter).then(function (results) {
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