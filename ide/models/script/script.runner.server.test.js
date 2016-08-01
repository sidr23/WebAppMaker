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
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'adult'}]
    },
    {   // adult = age >= 23 --> true
        type: 'NUMBER',
        operation: 'GREATER_THAN_EQUAL_TO',
        input:[{variable: 'age'}, {literal: 23}],
        output: 'adult'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'adult'}]
    },
    {   // year = 2014
        type: 'NUMBER',
        operation: 'VARIABLE',
        input:[{literal: 2014}],
        output:'year'
    },
    {   // past = year < 2016 --> true
        type: 'NUMBER',
        operation: 'LESSER_THAN',
        input:[{variable: 'year'}, {literal: 2016}],
        output: 'past'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Is it past year'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'past'}]
    },
    {   // current = year <= 2014 --> true
        type: 'NUMBER',
        operation: 'LESSER_THAN_EQUAL_TO',
        input:[{variable: 'year'}, {literal: 2014}],
        output: 'past'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Is it past year'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'past'}]
    },
    {   // newyear = 2016
        type: 'NUMBER',
        operation: 'VARIABLE',
        input:[{literal: 2016}],
        output:'newyear'
    },
    {   // newyear = thisyear == 2016 --> true
        type: 'NUMBER',
        operation: 'EQUAL_TO',
        input:[{variable: 'newyear'}, {literal: 2016}],
        output: 'thisyear'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Is it current year'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'thisyear'}]
    },
    {
        type: 'NUMBER',
        operation: 'POWER',
        input:[
            {literal:3},
            {literal: 2}],
        output:'Power'
    },
    {   // console.log('3 power 2 =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Square of 3 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'Power'}]
    },
    {
        type: 'NUMBER',
        operation: 'LOGARITHM',
        input:[
            {literal:8}],
        output:'Logarithm'
    },
    {   // console.log('Logarithm of 8 =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Logarithm of 8 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'Logarithm'}]
    },
    {
        type: 'NUMBER',
        operation: 'ROUND',
        input:[
            {literal:3.67}],
        output:'Rounded'
    },
    {   // console.log('Rounded 3.67 =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Rounding 3.67 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'Rounded'}]
    },
    {
        type: 'NUMBER',
        operation: 'ABSOLUTE',
        input:[
            {literal:-3}],
        output:'Absolute'
    },
    {   // console.log('Absolute -3 =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Absolute 3 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'Absolute'}]
    },
    {
        type: 'NUMBER',
        operation: 'EXPONENTIAL',
        input:[
            {literal: 1}],
        output:'Exponential'
    },
    {   // console.log('Exponential 1 =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Exponential 1 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'Exponential'}]
    },
    {
        type: 'NUMBER',
        operation: 'COS',
        input:[
            {literal: 0}],
        output:'cosine'
    },
    {   // console.log('cosine 0 =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'cosine 0 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'cosine'}]
    },
    {
        type: 'NUMBER',
        operation: 'SIN',
        input:[
            {literal: 90}],
        output:'sine'
    },
    {   // console.log('sine 90 =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'sine 90 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'sine'}]
    },
    {
        type: 'NUMBER',
        operation: 'TAN',
        input:[
            {literal: 45}],
        output:'tan'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Tan 45 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'tan'}]
    },
    {
        type: 'NUMBER',
        operation: 'CEIL',
        input:[
            {literal: -3.44}],
        output:'ceil'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Celing -3.44 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'ceil'}]
    },
    {
        type: 'NUMBER',
        operation: 'FLOOR',
        input:[
            {literal:-3.44}],
        output:'floor'
    },
    {   // console.log('Absolute -3 =')
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Floor -3.44 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'floor'}]
    },
    {
        type: 'NUMBER',
        operation: 'SQRT',
        input:[
            {literal: 25}],
        output:'sqrt'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'sqrt of 25 ='}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'sqrt'}]
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
    }
];

var script = {
    statements: statements
};

var model = {
    A: 2,
    B: 4,
    tobe: 'To Be',
    grades: [90,98,100]
};

var runner = require('../script/script.runner.server')();
runner.run(script, model);
console.log(model);