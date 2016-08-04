var statements = [
    {
        type: 'DATABASE',
        operation: 'Insert',
        input: [
            {literal:"Student"},
            {literal:{"id":123,"name":"Joey","grade":"10"}}
        ]
    },
    {
        type: 'DATABASE',
        operation: 'Insert',
        input: [
            {variable:"collectionName1"},
            {literal:{"employee_id":"F.R.I.E.N.D.S05","employee_name":"Joey","department":"Stupidity","location":"Central Perk"}}
        ]
    },
    {
        type: 'DATABASE',
        operation: 'Select',
        input: [
            {variable:'collectionName2'},
            {literal:{"id":"123"}}
        ]
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


var runner = require('../script/script.runner.server')();
runner.run(script, model);
console.log("model")
console.log(model);