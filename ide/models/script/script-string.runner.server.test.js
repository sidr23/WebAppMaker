/**
 * Created by shrav on 7/31/2016.
 */

var statements = [
    {
        type: 'STRING',
        operation: 'CONCATENATE',
        input: [
            {variable: 'tobe'},
            {variable: 'Nottobe'}
        ],
        output: 'concat_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'concat_result'}]
    },
    {
        type: 'STRING',
        operation: 'SUBSTRING',
        input: [
            {literal: 'Hello World'},
            {literal: '1'},
            {literal: '6'}
        ],
        output: 'substring_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'substring_result'}]
    },
    {
        type: 'STRING',
        operation: 'SUBSTR',
        input: [
            {literal: 'Hello World'},
            {literal: '1'},
            {literal: '6'}
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
            {literal: 'Be it'},
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
            {variable: 'Nottobe'}
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
        operation: 'CHARCODEAT',
        input: [
            {variable: 'tobe'},
            {literal: '3'}
        ],
        output: 'charCodeAt_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'charCodeAt_result'}]
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
            {literal: 'Hello Hello World'},
            {literal:'Hello'},
            {literal:'World'}
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
        operation: 'REPLACEALL',
        input: [
            {literal: 'Hello Hello World'},
            {literal:'Hello'},
            {literal:'World'}
        ],
        output: 'replaceAll_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'replaceAll_result'}]
    },
    {
        type: 'STRING',
        operation: 'SLICE',
        input: [
            {variable: 'tobe'},
            {literal: '3'},
            {literal: '5'}
        ],
        output: 'slice_result'
    },
    {
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
        operation: 'LOCALELOWERCASE',
        input: [
            {variable: 'tobe'}
        ],
        output: 'localelcase_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localelcase_result'}]
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
        operation: 'LOCALEUPPERCASE',
        input: [
            {variable: 'tobe'}
        ],
        output: 'localeucase_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localeucase_result'}]
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
    {
        type: 'STRING',
        operation: 'LOCALECOMPARE',
        input: [
            {literal: 'To Be'},
            {variable: 'tobe'}
        ],
        output: 'localeCompare_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localeCompare_result'}]
    },
    {
        type: 'STRING',
        operation: 'LOCALECOMPARE',
        input: [
            {literal: 'ab'},
            {literal: 'de'}
        ],
        output: 'localeCompare_str1sorted_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localeCompare_str1sorted_result'}]
    },
    {
        type: 'STRING',
        operation: 'LOCALECOMPARE',
        input: [
            {literal: 'cd'},
            {literal: 'ab'}
        ],
        output: 'localeCompare_str2sorted_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localeCompare_str2sorted_result'}]
    },
    {
        type: 'STRING',
        operation: 'MATCH',
        input: [
            {literal: 'to be to be'},
            {literal: 'be'}
        ],
        output: 'match_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'match_result'}]
    },
    {
        type: 'STRING',
        operation: 'SPLIT',
        input: [
            {literal: 'to be to be'},
            {literal:' '}
        ],
        output: 'split_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'split_result'}]
    },
    {
        type: 'STRING',
        operation: 'STARTSWITH',
        input: [
            {variable: 'tobe'},
            {literal: 'To'}
        ],
        output: 'startsWith_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'startsWith_result'}]
    },
    {
        type: 'STRING',
        operation: 'STARTSWITH',
        input: [
            {variable: 'tobe'},
            {literal: 'Be'}
        ],
        output: 'startsWith_neg_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'startsWith_neg_result'}]
    },
    {
        type: 'STRING',
        operation: 'ENDSWITH',
        input: [
            {variable: 'tobe'},
            {literal: 'Be'}
        ],
        output: 'endsWith_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'endsWith_result'}]
    },
    {
        type: 'STRING',
        operation: 'ENDSWITH',
        input: [
            {variable: 'tobe'},
            {literal: 'To'}
        ],
        output: 'endsWith_neg_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'endsWith_neg_result'}]
    },
    {
        type: 'STRING',
        operation: 'VALUEOF',
        input: [
            {variable: 'tobe'}
        ],
        output: 'valueOf_result'
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'valueOf_result'}]
    },
];

var script = {
    statements: statements
};

var model = {
    tobe: 'To Be',
    Nottobe:'Not To Be'
};

var runner = require('../script/script.runner.server.js')();
runner.run(script, model);
console.log(model);