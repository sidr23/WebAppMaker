

var statements = [
    {   
        label:'start',
        type:'BOOLEAN',
        operation:'AND',
        input:[
            {variable:'A'},
            {variable: 'B'}],
        output:'C'
    },
    { // Display AND of A and B
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of A AND B'}]
    },
	{
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'BOOLEAN',
        operation: 'OR',
        input:[
            {variable:'C'},
            {variable: 'B'}],
        output: 'F'
    },
    { // Displays the above literal
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of C OR B is '}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{
        type: 'BOOLEAN',
        operation: 'XOR',
        input:[
            {variable:'C'},
            {variable: 'B'}],
        output: 'F'
    },
    { // Displays the above literal
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of C XOR B is '}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{
        type: 'BOOLEAN',
        operation: 'NAND',
        input:[
            {variable:'C'},
            {variable: 'B'}],
        output: 'F'
    },
    { // Displays the above literal
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of C NAND B is '}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{
        type: 'BOOLEAN',
        operation: 'NOR',
        input:[
            {variable:'C'},
            {variable: 'B'}],
        output: 'F'
    },
    { // Displays the above literal
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of C NOR B is '}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{
        type: 'BOOLEAN',
        operation: 'NOT',
        input:[
            {variable: 'B'}],
        output: 'F'
    },
    { // Displays the above literal
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of NOT of B is '}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{
        type: 'BOOLEAN',
        operation: 'Eval',
        input:[
            {variable:'R'}
        ],
        output: 'C'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of eval expr is'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    }
	
];

var script = {
    statements: statements
};

var model = {
    A: true,
    B: false,
    D: 7,
	E : 5,
	R : ((5>6)||(2==2)&&false)

};

var runner = require('../script/script.runner.server')();
console.log(model);
runner.run(script, model);
console.log(model);