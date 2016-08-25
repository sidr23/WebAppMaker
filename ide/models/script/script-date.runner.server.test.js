/**
 * Created by ameyapandilwar on 7/29/16.
 */

var statements = [
    // `NEW_DATE`
    {
        // create a new date and store in `date`
        label: 'start',
        statementType: 'DATE',
        dateStatement: {
            operation: 'NEW_DATE'
        },
        output: 'date'
    },
    {
        // display message for current date
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The current date is -'}
        ]
    },
    {
        // display the value of the current date - `date`
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    // `NEW_DATE` from the `Date` object
    {
        // create a new date and store in `date`
        statementType: 'DATE',
        dateStatement: {
            operation: 'NEW_DATE',
            date: {literal: new Date()}
        },
        output: 'date'
    },
    {
        // display message for current date
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The current date (from the `Date` object) is -'}
        ]
    },
    {
        // display the value of the current date - `date`
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    // `DATE_FROM_STRING`
    {
        // create a date from a string literal
        statementType: 'DATE',
        dateStatement: {
            operation: 'DATE_FROM_STRING',
            dateString: {literal: 'Jun 24, 1990'}
        },
        output: 'date'
    },
    {
        // display message for the date from a string literal
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date created from the string is -'}
        ]
    },
    {
        // display the value of the date from a string literal - `date`
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },
    {
        // create a date from a string variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'DATE_FROM_STRING',
            dateString: {variable: 'stringDate'}
        },
        output: 'date'
    },
    {
        // display message for the date from a string literal
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date created from the string is -'}
        ]
    },
    {
        // display the value of the date from a string literal - `date`
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    // `DATE_FROM_MILLISECONDS`
    {
        // create date based on the provided milliseconds literal
        statementType: 'DATE',
        dateStatement: {
            operation: 'DATE_FROM_MILLISECONDS',
            milliseconds: {literal: 1469844179761}
        },
        output: 'date'
    },
    {
        // display message for the date from the milliseconds literal
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date created from the milliseconds is -'}
        ]
    },
    {
        // display the value of the date from a string literal - `date`
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },
    {
        // create date based on the provided milliseconds variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'DATE_FROM_MILLISECONDS',
            milliseconds: {variable: 'milliseconds'}
        },
        output: 'date'
    },
    {
        // display message for the date from the milliseconds literal
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date created from the milliseconds is -'}
        ]
    },
    {
        // display the value of the date from a string literal - `date`
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    // `DATE_FROM_PARAMETERS`
    {
        // create date based on the provided parameters (year, month, day, hours, minutes, seconds, milliseconds)
        statementType: 'DATE',
        dateStatement: {
            operation: 'DATE_FROM_PARAMETERS',
            year:           {literal: 2016}, // year
            month:          {literal: 7},    // month
            day:            {literal: 29},   // day
            hours:          {literal: 19},   // hours
            minutes:        {literal: 20},   // minutes
            seconds:        {literal: 30},   // seconds
            milliseconds:   {literal: 75}    // milliseconds
        },
        output: 'date'
    },
    {
        // display message for the date from parameters
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date created from the parameters is -'}
        ]
    },
    {
        // display the value of the date from parameters - `date`
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    // `ADD`
    {
        // add `15` years to `stringDate` variable and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'ADD',
            operand: {variable: 'stringDate'},
            value1: {literal: 15},
            value2: {literal: 'Years'}

        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (add `15 years`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Fri Jun 24 2005 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // add `4` months to `stringDate` variable and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'ADD',
            operand: {variable: 'stringDate'},
            value1: {literal: 4},
            value2: {literal: 'Months'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (add `4 months`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Wed Oct 24 1990 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // add `20` days to `stringDate` variable and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'ADD',
            value: 'Days',
            operand: {variable: 'stringDate'},
            value1: {literal: 20},
            value2: {literal: 'Days'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (add `20 days`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sat Jul 14 1990 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // add `6` hours to `stringDate` variable and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'ADD',
            value: 'Hours',
            operand: {variable: 'stringDate'},
            value1: {literal: 6},
            value2: {literal: 'Hours'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (add `6 hours`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 06:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // add `180` minutes to `stringDate` variable and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'ADD',
            value: 'Minutes',
            operand: {variable: 'stringDate'},
            value1: {literal: 180},
            value2: {literal: 'Minutes'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (add `180 minutes`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 03:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // add `900` seconds to `stringDate` variable and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'ADD',
            value: 'Seconds',
            operand: {variable: 'stringDate'},
            value1: {literal: 900},
            value2: {literal: 'Seconds'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (add `900 seconds`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:15:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    // `SUBTRACT`
    {
        // subtract `15` years from `Fri Jun 24 2005 00:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'SUBTRACT',
            operand: {literal: 'Fri Jun 24 2005 00:00:00 GMT-0700 (PDT)'},
            value1: {literal: 15},
            value2: {literal: 'Years'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (subtract `15 years`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // subtract `4` months from `Wed Oct 24 1990 00:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'SUBTRACT',
            operand: {literal: 'Wed Oct 24 1990 00:00:00 GMT-0700 (PDT)'},
            value1: {literal: 4},
            value2: {literal: 'Months'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (subtract `4 months`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // subtract `20` days from `Sat Jul 14 1990 00:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'SUBTRACT',
            operand: {literal: 'Sat Jul 14 1990 00:00:00 GMT-0700 (PDT)'},
            value1: {literal: 20},
            value2: {literal: 'Days'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (subtract `20 days`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // subtract `6` hours from `Sun Jun 24 1990 06:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'SUBTRACT',
            operand: {literal: 'Sun Jun 24 1990 06:00:00 GMT-0700 (PDT)'},
            value1: {literal: 6},
            value2: {literal: 'Hours'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (subtract `6 hours`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // subtract `180` minutes from `Sun Jun 24 1990 03:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'SUBTRACT',
            operand: {literal: 'Sun Jun 24 1990 03:00:00 GMT-0700 (PDT)'},
            value1: {literal: 180},
            value2: {literal: 'Minutes'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (subtract `180 minutes`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        // subtract `900` seconds from `Sun Jun 24 1990 00:15:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        statementType: 'DATE',
        dateStatement: {
            operation: 'SUBTRACT',
                operand: {literal: 'Sun Jun 24 1990 00:15:00 GMT-0700 (PDT)'},
                value1: {literal: 900},
                value2: {literal: 'Seconds'}
        },
        output: 'date'
    },
    {
        // display message for the date after the operation
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date after the operation (subtract `900 seconds`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    // `ADD_DATES`
    {
        statementType: 'DATE',
        dateStatement: {
            operation: 'ADD_DATES',
            operand1: {literal: 'Jun 24, 1990'},
            operand2: {literal: 'Jun 24, 1990'}
        },
        output: 'date'
    },
    {
        // display message after adding the two dates
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The addition of the two dates is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Fri Oct 31 3980 18:21:06 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },
    
    // `SUBTRACT_DATES`
    {
        statementType: 'DATE',
        dateStatement: {
            operation: 'SUBTRACT_DATES',
            operand1: {literal: 'Jun 24, 1990'},
            operand2: {literal: 'Jun 24, 1990'}
        },
        output: 'date'
    },
    {
        // display message after adding the two dates
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The subtraction of the two dates is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun, 24 Jun 1990 07:00:00 GMT`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    // `TO_UTC_FORMAT`
    {
        statementType: 'DATE',
        dateStatement: {
            operation: 'TO_UTC_FORMAT',
            operand: {literal: 'Jun 24, 1990'}
        },
        output: 'date'
    },
    {
        // display message for the date in UTC format
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date in UTC format is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun, 24 Jun 1990 07:00:00 GMT`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    // `TO_LOCAL_FORMAT`
    {
        statementType: 'DATE',
        dateStatement: {
            operation: 'TO_LOCAL_FORMAT',
            operand: {variable: 'stringDate'}
        },
        output: 'date'
    },
    {
        // display message for the date in UTC format
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date in the local format is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    },

    {
        statementType: 'DATE',
        dateStatement: {
            operation: 'TO_LOCAL_FORMAT',
            operand: {variable: 'stringDate'},
            locale: {literal: 'DD MMM YYYY hh:mm a'}
        },
        output: 'date'
    },
    {
        // display message for the date in the specified format
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: 'The date in the specified format is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `24 Jun 1990 12:00 am`]
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        statementType: 'CONSOLE',
        operation: 'LOG',
        input: [
            {literal: ''}
        ]
    }
];

var script = {
    statements: statements
};

var model = {
    milliseconds: 1469843175124,
    stringDate: '24 Jun 1990'
};

var runner = require('../script/script.runner.server.js')();
runner.run(script, model);
console.log(model);

// model after execution -

// { milliseconds: 1469843175124,
//     stringDate: '24 Jun 1990',
//     date: Sun Jun 24 1990 00:00:00 GMT-0700 (PDT) }