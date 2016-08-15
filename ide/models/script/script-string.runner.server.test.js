/**
 * Created by shrav on 7/31/2016.
 */

var statements = [
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'CONCATENATE',
            string1: {variable: 'tobe'},
            string2: {variable: 'Nottobe'}
        },
            output: 'concat_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'concat_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'SUBSTRING',
            string1: {literal: 'HelloWorld'},
            index: {literal: '1'},
            length: {literal: '6'}
        },
        output: 'substring_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'substring_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'SUBSTR',
            string1: {literal: 'HelloWorld'},
            index  : {literal: '1'},
            length : {literal: '6'}
        },
        output: 'substr_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'substr_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'LENGTH',
            string1: {variable: 'tobe'}
        },
        output: 'len_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'len_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'INCLUDES',
            string1: {literal: 'Be it'},
            string2: {literal: 'Be'}
        },
        output: 'includes_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'includes_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'INCLUDES',
            string1: {variable: 'tobe'},
            string2: {literal: 'be'}
        },
        output: 'includes_neg_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'includes_neg_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'INDEXOF',
            string1: {variable: 'tobe'},
            string2: {literal: 'Be'}
        },
        output: 'indexOf_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'indexOf_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'INDEXOF',
            string1: {variable: 'tobe'},
            string2: {literal: 'Nottobe'}
        },
        output: 'indexOf_neg_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'indexOf_neg_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'CHARAT',
            string1: {variable: 'tobe'},
            index: {literal: '3'}
        },
        output: 'charAt_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'CharAt_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'CHARAT',
            string1: {variable: 'tobe'},
            index: {literal: '6'}
        },
        output: 'charAt_neg_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'CharAt_neg_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'CHARCODEAT',
            string1: {literal: 'HelloWorld'},
            index: {literal: '0'}
        },
        output: 'charCodeAt_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'charCodeAt_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'LASTINDEXOF',
            string1: {variable: 'tobe'},
            string2: {literal: 'B'}
        },
        output: 'lastIndex_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'lastIndex_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'LASTINDEXOF',
            string1: {variable: 'tobe'},
            string2: {literal: 'Y'}
        },
        output: 'lastIndex_neg_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'lastIndex_neg_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'SEARCH',
            string1: {variable: 'tobe'},
            string2: {literal: 'B'}
        },
        output: 'search_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'search_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'SEARCH',
            string1: {variable: 'tobe'},
            string2: {literal: 'Y'}
        },
        output: 'search_neg_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'search_neg_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'REPEAT',
            string1: {variable: 'tobe'},
            count: {literal: '3'}
        },
        output: 'repeat_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'repeat_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'REPLACE',
            string1: {literal: 'Hello Hello World'},
            string2: {literal:'Hello'},
            string3: {literal:'World'}
        },
        output: 'replace_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'replace_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'REPLACEALL',
            string1: {literal: 'Hello Hello World'},
            string2: {literal:'Hello'},
            string3: {literal:'World'}
        },
        output: 'replaceAll_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'replaceAll_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'SLICE',
            string1: {variable: 'tobe'},
            index:  {literal: '3'},
            length: {literal: '5'}
        },
        output: 'slice_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'slice_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'SLICE',
            string1: {variable: 'tobe'},
            index:  {literal: '6'},
            length: {literal: '9'}
        },
        output: 'slice_neg_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'slice_neg_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'LOWERCASE',
            string1: {variable: 'tobe'}
        },
        output: 'lcase_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'lcase_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'LOCALELOWERCASE',
            string1: {variable: 'tobe'}
        },
        output: 'localelcase_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localelcase_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'UPPERCASE',
            string1: {variable: 'tobe'}
        },
        output: 'ucase_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'ucase_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'LOCALEUPPERCASE',
            string1: {variable: 'tobe'}
        },
        output: 'localeucase_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localeucase_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'TRIM',
            string1: {literal: ' tobe '}
        },
        output: 'trim_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'trim_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'LOCALECOMPARE',
            string1: {literal: 'To Be'},
            string2: {variable: 'tobe'}
        },
        output: 'localeCompare_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localeCompare_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'LOCALECOMPARE',
            string1: {literal: 'ab'},
            string2: {literal: 'de'}
        },
        output: 'localeCompare_str1sorted_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localeCompare_str1sorted_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'LOCALECOMPARE',
            string1: {literal: 'cb'},
            string2: {literal: 'ab'}
        },
        output: 'localeCompare_str2sorted_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'localeCompare_str2sorted_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'MATCH',
            string1: {literal: 'to be to be'},
            string2: {literal: 'be'}
        },
        output: 'match_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'match_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'SPLIT',
            string1: {literal: 'to be to be'},
            string2: {literal: ' '}
        },
        output: 'split_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'split_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'STARTSWITH',
            string1: {variable: 'tobe'},
            string2: {literal: 'To'}
        },
        output: 'startsWith_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'startsWith_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'STARTSWITH',
            string1: {variable: 'tobe'},
            string2: {literal: 'Be'}
        },
        output: 'startsWith_neg_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'startsWith_neg_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'ENDSWITH',
            string1: {variable: 'tobe'},
            string2: {literal: 'Be'}
        },
        output: 'endsWith_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'endsWith_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'ENDSWITH',
            string1: {variable: 'tobe'},
            string2: {literal: 'To'}
        },
        output: 'endsWith_neg_result'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'endsWith_neg_result'}]
    },
    {
        statementType: 'STRING',
        stringStatement : {
            operation: 'VALUEOF',
            string1: {variable: 'tobe'}
        },
        output: 'valueOf_result'
    },
    {
        statementType: 'CONSOLE',
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