var statements = [
    {   // C = A + 23;
        label:'start',
        statementType:'NUMBER',
        numberStatement : {
            operation:'ADDITION',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {   // console.log(C) --> 25
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // console.log('A =')
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A ='}]
    },
    {   // console.log(A) --> 2
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'A'}]
    },
    {   // console.log('A plus 23 =')
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A plus 23 ='}]
    },
    {   // C = A + 23;
        statementType:'NUMBER',
        numberStatement : {
            operation:'ADDITION',
            operand1: {variable: 'A'},
            operand2: {literal: 23}
        },

        output:'C'
    },
    {   // console.log(C) --> 25
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // C = A - B;
        statementType:'NUMBER',
        numberStatement : {
            operation:'SUBTRACTION',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A - B ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // C = A * B;
        statementType:'NUMBER',
        numberStatement : {
            operation:'MULTIPLICATION',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A * B ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // C = A * 100;
        statementType:'NUMBER',
        numberStatement : {
            operation:'MULTIPLICATION',
            operand1: {variable: 'A'},
            operand2: {literal: 100}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A * 100 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'DIVISION',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A / B ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // C = A / 2;
        statementType:'NUMBER',
        numberStatement : {
            operation:'DIVISION',
            operand1: {variable: 'A'},
            operand2: {literal: 2}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A / 2 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'GREATER_THAN',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A > B ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // C = A > 2;
        statementType:'NUMBER',
        numberStatement : {
            operation:'GREATER_THAN',
            operand1: {variable: 'A'},
            operand2: {literal: 2}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A > 2 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'DIVISION',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A / B ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // C = A / 2;
        statementType:'NUMBER',
        numberStatement : {
            operation:'DIVISION',
            operand1: {variable: 'A'},
            operand2: {literal: 2}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A / 2 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'EQUAL_TO',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: '(A == B) ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'EQUAL_TO',
            operand1: {variable: 'A'},
            operand2: {literal: 2}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: '(A == 2)'}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'GREATER_THAN_EQUAL_TO',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A >= B ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'GREATER_THAN_EQUAL_TO',
            operand1: {variable: 'A'},
            operand2: {literal: 2}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A >= 2 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'LESSER_THAN',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A < B ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // C = A / 2;
        statementType:'NUMBER',
        numberStatement : {
            operation:'LESSER_THAN',
            operand1: {variable: 'A'},
            operand2: {literal: 10}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A < 10 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'LESSER_THAN_EQUAL_TO',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A <= B ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // C = A / 2;
        statementType:'NUMBER',
        numberStatement : {
            operation:'LESSER_THAN_EQUAL_TO',
            operand1: {variable: 'A'},
            operand2: {literal: 2}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'A <= 2 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {   // age = 23
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'VARIABLE',
            operand1: {literal: 23}
        },
        output:'age'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'age is '}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'age'}]
    },
    {   // adult = age > 21 --> true
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'GREATER_THAN',
            operand2: {literal: 21},
            operand1: {variable: 'age'}
        },
        output: 'adult'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'age > 21 '}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'adult'}]
    },

    {   // newyear = 2016
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'VARIABLE',
            operand1: {literal: 2016}
        },
        output:'newyear'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'newyear is '}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'newyear'}]
    },

    {   // newyear = thisyear == 2016 --> true
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'EQUAL_TO',
            operand1: {variable: 'newyear'},
            operand2: {literal: 2016}
        },
        output: 'thisyear'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Is it current year'}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'thisyear'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'POWER',
            operand1: {literal: 3},
            operand2: {literal: 2}
        },
        output:'Power'
    },
    {   // console.log('3 power 2 =')
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Square of 3 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'Power'}]
    },
    {
        statementType:'NUMBER',
        numberStatement : {
            operation:'POWER',
            operand1: {variable: 'A'},
            operand2: {variable: 'B'}
        },

        output:'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Power(A,B) ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'LOGARITHM',
            operand1: {literal: 8},
        },
        output:'Logarithm'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Logarithm of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'Logarithm'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'LOGARITHM',
            operand1: {variable: 'A'},
        },
        output:'Logarithm'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Logarithm of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'Logarithm'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'ROUND',
            operand1: {literal: 8},
        },
        output:'round'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'ROUND of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'round'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'ROUND',
            operand1: {variable: 'A'},
        },
        output:'round'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'ROUND of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'round'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'ABSOLUTE',
            operand1: {literal: 8},
        },
        output:'abs'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'ABSOLUTE of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'abs'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'ABSOLUTE',
            operand1: {variable: 'A'},
        },
        output:'abs'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'ABSOLUTE of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'abs'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'EXPONENTIAL',
            operand1: {literal: 8},
        },
        output:'exponential'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'EXPONENTIAL of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'exponential'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'EXPONENTIAL',
            operand1: {variable: 'A'},
        },
        output:'exponential'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'EXPONENTIAL of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'exponential'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'COS',
            operand1: {literal: 8},
        },
        output:'cosine'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'COS of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'cosine'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'COS',
            operand1: {variable: 'A'},
        },
        output:'cosine'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'COS of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'cosine'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'SIN',
            operand1: {literal: 8},
        },
        output:'sine'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'SIN of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'sine'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'SIN',
            operand1: {variable: 'A'},
        },
        output:'sine'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'SIN of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'sine'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'TAN',
            operand1: {literal: 8},
        },
        output:'tan'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'TAN of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'tan'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'TAN',
            operand1: {variable: 'A'},
        },
        output:'tan'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'TAN of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'tan'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'CEIL',
            operand1: {literal: 8},
        },
        output:'ceil'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'CEIL of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'ceil'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'CEIL',
            operand1: {variable: 'A'},
        },
        output:'ceil'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'CEIL of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'ceil'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'FLOOR',
            operand1: {literal: 8},
        },
        output:'floor'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'FLOOR of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'floor'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'FLOOR',
            operand1: {variable: 'A'},
        },
        output:'floor'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'FLOOR of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'floor'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'SQRT',
            operand1: {literal: 8},
        },
        output:'sqrt'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'SQRT of 8 ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'sqrt'}]
    },
    {
        statementType: 'NUMBER',
        numberStatement : {
            operation: 'SQRT',
            operand1: {variable: 'A'},
        },
        output:'sqrt'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'SQRT of A ='}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'sqrt'}]
    },
];

var script = {
    statements: statements
};

var model = {
    A: 2,
    B: 4
};

var runner = require('../script/script.runner.server')();
runner.run(script, model);
console.log(model);