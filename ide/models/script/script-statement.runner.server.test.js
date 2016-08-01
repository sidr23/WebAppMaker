/**
 * Created by shrav on 7/31/2016.
 */

//var number = require('../statement/number-statement.impl.server');

var statements = [
    {
        type: 'STRING',
        operation: 'CONCATENATE',
        input: [
            {variable: 'tobe'},
            {literal: ' Or Not To Be'}
        ],
        output: 'result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'result'}]
    },
    {
        type: 'STRING',
        operation: 'SUBSTRING',
        input: [
            {variable: 'tobe'},
            {literal: '2'}
        ],
        output: 'substr_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'substr_result'}]
    },
    {
        type: 'STRING',
        operation: 'LENGTH',
        input: [
            {variable: 'tobe'}
        ],
        output: 'len_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'len_result'}]
    },
    {
        type: 'STRING',
        operation: 'INCLUDES',
        input: [
            {variable: 'tobe'},
            {literal: 'Be'}
        ],
        output: 'includes_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'includes_result'}]
    },
    {
        type: 'STRING',
        operation: 'INCLUDES',
        input: [
            {variable: 'tobe'},
            {literal: 'be'}
        ],
        output: 'includes_neg_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'includes_neg_result'}]
    },
    {
        type: 'STRING',
        operation: 'INCLUDES',
        input: [
            {variable: 'tobe'},
            {literal: 'be'}
        ],
        output: 'includes_neg_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'includes_neg_result'}]
    },
    {
        type: 'STRING',
        operation: 'INDEXOF',
        input: [
            {variable: 'tobe'},
            {literal: 'Be'}
        ],
        output: 'indexOf_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'indexOf_result'}]
    },
    {
        type: 'STRING',
        operation: 'INDEXOF',
        input: [
            {variable: 'tobe'},
            {literal: 'be'}
        ],
        output: 'indexOf_neg_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'indexOf_neg_result'}]
    },
    {
        type: 'STRING',
        operation: 'CHARAT',
        input: [
            {variable: 'tobe'},
            {literal: '3'}
        ],
        output: 'charAt_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'CharAt_result'}]
    },
    {
        type: 'STRING',
        operation: 'CHARAT',
        input: [
            {variable: 'tobe'},
            {literal: '6'}
        ],
        output: 'charAt_neg_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'CharAt_neg_result'}]
    },
    {
        type: 'STRING',
        operation: 'LASTINDEXOF',
        input: [
            {variable: 'tobe'},
            {literal: 'B'}
        ],
        output: 'lastIndex_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'lastIndex_result'}]
    },
    {
        type: 'STRING',
        operation: 'LASTINDEXOF',
        input: [
            {variable: 'tobe'},
            {literal: 'Y'}
        ],
        output: 'lastIndex_neg_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'lastIndex_neg_result'}]
    },
    {
        type: 'STRING',
        operation: 'SEARCH',
        input: [
            {variable: 'tobe'},
            {literal: 'B'}
        ],
        output: 'search_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'search_result'}]
    },
    {
        type: 'STRING',
        operation: 'SEARCH',
        input: [
            {variable: 'tobe'},
            {literal: 'Y'}
        ],
        output: 'search_neg_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'search_neg_result'}]
    },
    {
        type: 'STRING',
        operation: 'REPEAT',
        input: [
            {variable: 'tobe'},
            {literal: '3'}
        ],
        output: 'repeat_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'repeat_result'}]
    },
    {
        type: 'STRING',
        operation: 'REPLACE',
        input: [
            {variable: 'tobe'},
            {literal:'To'},
            {literal:'Not To'}
        ],
        output: 'replace_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'replace_result'}]
    },
    {
        type: 'STRING',
        operation: 'SLICE',
        input: [
            {variable: 'tobe'},
            {literal: '3'}
        ],
        output: 'slice_result'
    },
    {   // console.log(result); --> 'To Be Or Not To Be'
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'slice_result'}]
    },
    {
        type: 'STRING',
        operation: 'SLICE',
        input: [
            {variable: 'tobe'},
            {literal: '6'}
        ],
        output: 'slice_neg_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'slice_neg_result'}]
    },
    {
        type: 'STRING',
        operation: 'LOWERCASE',
        input: [
            {variable: 'tobe'}
        ],
        output: 'lcase_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'lcase_result'}]
    },
    {
        type: 'STRING',
        operation: 'UPPERCASE',
        input: [
            {variable: 'tobe'}
        ],
        output: 'ucase_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'ucase_result'}]
    },
    {
        type: 'STRING',
        operation: 'TRIM',
        input: [{literal: ' tobe '}],
        output: 'trim_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'trim_result'}]
    },

];

var script = {
    statements: statements
};

var model = {
    tobe: 'To Be'
};

var runner = require('../script/script.runner.server.js')();
runner.run(script, model);
console.log(model);