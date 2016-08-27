var statements = [
    {   
        label : 'start',
        statementType : 'BOOLEAN',
		booleanStatement : {
			operation : 'AND',
            operand1  : {variable:'A'},
            operand2  : {variable:'B'},
		},
        output:'C'
    },
    { // Display AND of A and B
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of A AND B'}]
    },
	{
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
	{ 
        statementType : 'BOOLEAN',
		booleanStatement : {
			operation : 'OR',
            operand1  : {variable:'C'},
            operand2  : {variable:'B'},
		},
        output:'F'
    },
    { // Displays the above literal
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of C OR B is '}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{ 
        statementType : 'BOOLEAN',
		booleanStatement : {
			operation : 'XOR',
            operand1  : {variable:'C'},
            operand2  : {variable:'B'}
		},
        output:'F'
    },
    { // Displays the above literal
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of C XOR B is '}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{ 
        statementType : 'BOOLEAN',
		booleanStatement : {
			operation : 'NAND',
            operand1  : {variable:'C'},
            operand2  : {variable:'B'}
		},
        output:'F'
    },
    { // Displays the above literal
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of C NAND B is '}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{ 
        statementType : 'BOOLEAN',
		booleanStatement : {
			operation : 'NOR',
            operand1  : {variable:'C'},
            operand2  : {variable:'B'},
		},
        output:'F'
    },
    { // Displays the above literal
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of C NOR B is '}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{ 
        statementType : 'BOOLEAN',
		booleanStatement : {
			operation : 'NOT',
            operand1  : {variable:'B'}
		},
        output:'F'
    },
    { // Displays the above literal
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of NOT of B is '}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'F'}]
    },
	{ 
        statementType : 'BOOLEAN',
		booleanStatement : {
			operation : 'EVAL',
            operand1  : {variable:'R'}
		},
        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result of EVAL expr is'}]
    },
    {
        statementType: 'CONSOLE',
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

console.log(model);
var runner = require('../script/script.runner.server')();
runner.run(script, model);
console.log(model);