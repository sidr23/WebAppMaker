/**
 * Created by ameyapandilwar on 7/29/16.
 */

var statements = [
    // `New Date`
    {
        // create a new date and store in `date`
        label:'start',
        type:'DATE',
        operation:'New Date',
        input:[],
        output:'date'
    },
    {
        // display message for current date
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The current date is -'}
        ]
    },
    {
        // display the value of the current date - `date`
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    // `Date From String`
    {
        // create a date from a string literal
        type:'DATE',
        operation:'Date From String',
        input:[
            {literal: 'Jun 24, 1990'}
        ],
        output:'date'
    },
    {
        // display message for the date from a string literal
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date created from the string is -'}
        ]
    },
    {
        // display the value of the date from a string literal - `date`
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // create a date from a string variable
        type:'DATE',
        operation:'Date From String',
        input:[
            {variable: 'stringDate'}
        ],
        output:'date'
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    // `Date From Milliseconds`
    {
        // create date based on the provided milliseconds literal
        type:'DATE',
        operation:'Date From Milliseconds',
        input:[
            {literal: 1469844179761}
        ],
        output:'date'
    },
    {
        // display message for the date from the milliseconds literal
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date created from the milliseconds is -'}
        ]
    },
    {
        // display the value of the date from a string literal - `date`
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // create date based on the provided milliseconds variable
        type:'DATE',
        operation:'Date From Milliseconds',
        input:[
            {variable: 'milliseconds'}
        ],
        output:'date'
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    // `Date From Parameters`
    {
        // create date based on the provided parameters (year, month, day, hours, minutes, seconds, milliseconds)
        type:'DATE',
        operation:'Date From Parameters',
        input:[
            {literal: 2016}, // year
            {literal: 7},    // month
            {literal: 29},   // day
            {literal: 19},   // hours
            {literal: 20},   // minutes
            {literal: 30},   // seconds
            {literal: 75}    // milliseconds
        ],
        output:'date'
    },
    {
        // display message for the date from parameters
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date created from the parameters is -'}
        ]
    },
    {
        // display the value of the date from parameters - `date`
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    // `Add`
    {
        // add `15` years to `stringDate` variable and store the output in `date` variable
        type:'DATE',
        operation:'Add',
        value:'Years',
        input:[
            {variable: 'stringDate'},
            {literal: 15}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (add `15 years`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Fri Jun 24 2005 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // add `4` months to `stringDate` variable and store the output in `date` variable
        type:'DATE',
        operation:'Add',
        value:'Months',
        input:[
            {variable: 'stringDate'},
            {literal: 4}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (add `4 months`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Wed Oct 24 1990 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // add `20` days to `stringDate` variable and store the output in `date` variable
        type:'DATE',
        operation:'Add',
        value:'Days',
        input:[
            {variable: 'stringDate'},
            {literal: 20}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (add `20 days`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sat Jul 14 1990 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // add `6` hours to `stringDate` variable and store the output in `date` variable
        type:'DATE',
        operation:'Add',
        value:'Hours',
        input:[
            {variable: 'stringDate'},
            {literal: 6}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (add `6 hours`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 06:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // add `180` minutes to `stringDate` variable and store the output in `date` variable
        type:'DATE',
        operation:'Add',
        value:'Minutes',
        input:[
            {variable: 'stringDate'},
            {literal: 180}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (add `180 minutes`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 03:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // add `900` seconds to `stringDate` variable and store the output in `date` variable
        type:'DATE',
        operation:'Add',
        value:'Seconds',
        input:[
            {variable: 'stringDate'},
            {literal: 900}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (add `900 seconds`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:15:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    // `Subtract`
    {
        // subtract `15` years from `Fri Jun 24 2005 00:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        type:'DATE',
        operation:'Subtract',
        value:'Years',
        input:[
            {literal: 'Fri Jun 24 2005 00:00:00 GMT-0700 (PDT)'},
            {literal: 15}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (subtract `15 years`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // subtract `4` months from `Wed Oct 24 1990 00:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        type:'DATE',
        operation:'Subtract',
        value:'Months',
        input:[
            {literal: 'Wed Oct 24 1990 00:00:00 GMT-0700 (PDT)'},
            {literal: 4}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (subtract `4 months`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // subtract `20` days from `Sat Jul 14 1990 00:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        type:'DATE',
        operation:'Subtract',
        value:'Days',
        input:[
            {literal: 'Sat Jul 14 1990 00:00:00 GMT-0700 (PDT)'},
            {literal: 20}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (subtract `20 days`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // subtract `6` hours from `Sun Jun 24 1990 06:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        type:'DATE',
        operation:'Subtract',
        value:'Hours',
        input:[
            {literal: 'Sun Jun 24 1990 06:00:00 GMT-0700 (PDT)'},
            {literal: 6}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (subtract `6 hours`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // subtract `180` minutes from `Sun Jun 24 1990 03:00:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        type:'DATE',
        operation:'Subtract',
        value:'Minutes',
        input:[
            {literal: 'Sun Jun 24 1990 03:00:00 GMT-0700 (PDT)'},
            {literal: 180}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (subtract `180 minutes`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    {
        // subtract `900` seconds from `Sun Jun 24 1990 00:15:00 GMT-0700 (PDT)` string literal and store the output in `date` variable
        type:'DATE',
        operation:'Subtract',
        value:'Seconds',
        input:[
            {literal: 'Sun Jun 24 1990 00:15:00 GMT-0700 (PDT)'},
            {literal: 900}
        ],
        output:'date'
    },
    {
        // display message for the date after the operation
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date after the operation (subtract `900 seconds`) is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    // `To UTC Format`
    {
        type:'DATE',
        operation:'To UTC Format',
        input:[
            {literal: 'Jun 24, 1990'}
        ],
        output:'date'
    },
    {
        // display message for the date in UTC format
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date in UTC format is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun, 24 Jun 1990 07:00:00 GMT`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: ''}
        ]
    },

    // `To Local Format`
    {
        type:'DATE',
        operation:'To Local Format',
        input:[
            {variable: 'stringDate'}
        ],
        output:'date'
    },
    {
        // display message for the date in UTC format
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {literal: 'The date in the local format is -'}
        ]
    },
    {
        // display the value of the date - `date` [should be `Sun Jun 24 1990 00:00:00 GMT-0700 (PDT)`]
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
            {variable: 'date'}
        ]
    },
    {
        // display empty line
        type: 'CONSOLE',
        operation: 'LOG',
        input:[
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