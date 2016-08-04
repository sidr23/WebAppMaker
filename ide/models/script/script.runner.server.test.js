//var number = require('../statement/number-statement.impl.server');

var statements = [
    {   // C = A + 23;
        label:'start',
        type:'NUMBER',
        operation:'ADDITION',
        input:[
            {variable:'A'},
            {literal: 23}],
        output:'C'
    },
    {   // console.log('A =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A ='}]
    },
    {   // console.log(A) --> 2
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'A'}]
    },
    {   // console.log('A plus 23 =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A plus 23 ='}]
    },
    {   // console.log(C) --> 25
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // result = tobe + ' Or Not To Be';
        type: 'STRING',
        operation: 'CONCATENATE',
        input: [
            {variable: 'tobe'},
            {literal: ' Or Not To Be'}
        ],
        output: 'result'
    },
    {   // console.log(result); --> 'To Be Or Not To Be'
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'result'}]
    },
    {   // age = 23
        type: 'NUMBER',
        operation: 'VARIABLE',
        input:[{literal: 23}],
        output:'age'
    },
    {   // adult = age > 21 --> true
        type: 'NUMBER',
        operation: 'GREATER_THAN',
        input:[{variable: 'age'}, {literal: 21}],
        output: 'adult'
    },
    {   // if(adult) goto candring else goto cantdrink
        type: 'FLOW',
        operation: 'IF',
        input:[
            {variable: 'adult'},
            {literal: 'candrink'},
            {literal: 'cantdrink'}
        ]
    },
    {
        label: 'cantdrink',
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'Cant Drink'}
        ]
    },
    {
        label: 'candrink',
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'Can Drink'}
        ]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'Count to 10'}
        ]
    },
    {   // i = 0;
        type: 'NUMBER',
        operation: 'VARIABLE',
        input:[{literal: 0}],
        output:'i'
    },
    {   // i++
        label:'addone',
        type:'NUMBER',
        operation:'ADDITION',
        input:[
            {variable:'i'},
            {literal: 1}],
        output:'i'
    },
    {   // console.log(i)
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'i'}
        ]
    },
    {   // done = i > 10
        type: 'NUMBER',
        operation: 'GREATER_THAN',
        input:[{variable: 'i'}, {literal: 10}],
        output: 'done'
    },
    {   // if(done) goto stop else goto addone
        type: 'FLOW',
        operation: 'IF',
        input:[
            {variable: 'done'},
            {literal: 'stop'},
            {literal: 'addone'}
        ]
    },
    {   // console.log('done')
        label: 'stop',
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'done'}
        ]
    },

    {
        type: 'DATABASE',
        operation: 'Insert',
        input: [
            {variable:{"collection":"Student","id":123,"name":"Joey","grade":"10"}}
        ]
    }
];

var script = {
    statements: statements
};

var model = {
    A: 2,
    B: 4,
    tobe: 'To Be'
    //grades: [90,98,100]
};

var runner = require('../script/script.runner.server')();
runner.run(script, model);
console.log(model);