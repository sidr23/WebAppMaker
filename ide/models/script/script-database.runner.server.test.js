var statements = [
    {
        statementType: 'DATABASE',
        databaseStatement: {
            operation: {
                type: 'INSERT'
            },
            collectionName: {literalString: 'Student'},
            record: {literalObject: {"id":123,"name":"Joey","grade":"10"}}
        },
        output:'insert_student_result'
    },
    {
        statementType: 'DATABASE',

        databaseStatement: {
            operation:{
                type: 'INSERT'
            },
            collectionName: {variable: "collectionName1"},
            record: {
                literalObject: {
                    "employee_id": "F.R.I.E.N.D.S05",
                    "employee_name": "Joey",
                    "department": "Stupidity",
                    "location": "Central Perk"
                }
            }
        },
        output:'insert_employee_result'
    },
    {
        statementType: 'DATABASE',
        databaseStatement: {
            operation: {
                type: 'SELECT'
            },
            collectionName: {variable: 'collectionName2'},
            filter: {literalObject: {"id":123}}
        },
        output:'select_student_result'
    },{
        statementType: 'DATABASE',
        databaseStatement:{
            operation:{
                type: 'UPDATE'
            },
            collectionName:{variable: 'collectionName2'},
            record:{literalObject:{"name":"Ross"}},
            filter:{literalObject:{"id":123}}
        },
        output:'update_student_result'
    }

    ,
    {
        statementType: 'DATABASE',
        databaseStatement:{
            operation:{
                type: 'DELETE'
            },
            collectionName:{variable: 'collectionName2'},
            filter:{literalObject:{"id":123}}
        },
        output:'delete_student_result'
    }


];

var script = {
    statements: statements
};

var model = {
    A: 2,
    B: 4,
    tobe: 'To Be',
    collectionName1: 'Employee',
    collectionName2: 'Student'
    //grades: [90,98,100]
};


var runner = require('../script/script.runner.server.js')();
runner.run(script, model);
console.log(model);