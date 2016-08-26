var q = require("q");

module.exports = function(db){

    var api = {

        selectRecords:selectRecords,
        insertRecords:insertRecords,
        updateRecords:updateRecords,
        deleteRecords:deleteRecords

    };

    return api;


    function selectRecords(operand1,operand2) {
        var deferred = q.defer();
        db.collection(operand1).findOne(operand2,function (err,docs) {
            if(err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(docs);
            }
        });
        return deferred.promise
    }

    function insertRecords(operand1,operand2){

        var deferred = q.defer();
        db.collection(operand1).update(operand2,operand2,{upsert:true},function (err,docs) {
            if(err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(docs);
            }
        });
        return deferred.promise

    }

    function updateRecords(operand1, operand2, operand3){

        var deferred = q.defer();
        db.collection(operand1).findAndModify({
                query:operand2,
                update:{$set:operand3}},
            function (err,docs) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(docs);
                }
            });
        return deferred.promise

    }

    function deleteRecords(operand1, operand2){
        var deferred = q.defer();
        console.log("Operand1",operand1);
        console.log("Operand2",operand2);
        db.collection(operand1).remove(operand2,function (err,docs) {
            if(err) {
                console.log(JSON.stringify(err));
                deferred.reject(err);
            }
            else {
                console.log(JSON.stringify(docs));
                deferred.resolve(docs);
            }
        });
        return deferred.promise
    }




};