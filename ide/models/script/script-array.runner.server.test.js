//var number = require('../statement/number-statement.impl.server');

var statements = [
    {   
        label:'start',
        type:'ARRAY',
        operation:'CONCAT',
        input:[
            {variable:'A'},
            {variable: 'B'}],
        output:'C'
    },
    { // Displays concatenation of A and B which is C
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'EVERY',
        input:[
            {variable:'A'}
        ],
        output: 'C'
    },
    {   // Displays true or false based on the function in every
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    }
];

var script = {
    statements: statements
};

var model = {
    A: [90, 92, 89],
    B: [4, 5, 6]
};

var runner = require('../script/script.runner.server')();
runner.run(script, model);
console.log(model);