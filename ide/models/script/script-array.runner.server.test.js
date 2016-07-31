//var number = require('../statement/number-statement.impl.server');

var statements = [
    {   
        label:'start',
        type:'ARRAY',
        operation:'CONCAT',
        input:[
            {variable:'A'},
            {variable: 'B'}],
        output:'C'
    },
    { // Displays concatenation of A and B is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Concatenation of array A and array B'}]
    },
    { // Displays concatenation of A and B which is C
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'EVERY',
        input:[
            {variable:'A'},
            {literal: 90}
        ],
        output: 'C'
    },
    { // Displays the above literal
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The number to be checked with is 90'}]
    },
    { // The result for if the above number is greater then all elements on A
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The result for if the above number is greater then all elements in A array'}]
    },
    {   // Displays true or false based on the function in every
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'FILTER',
        input:[
            {variable:'A'},
            {literal: 90}
        ],
        output: 'C'
    },
    { // The array A with all elements which pass are >= 90
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array A with all elements which pass are >= 80'}]
    },
    {   // Displays the array with after filtering with the above condition
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'FIND',
        input:[
            {variable:'B'},
            {literal: "ftw"}
        ],
        output: 'C'
    },
    { // The first element that is equal to ftw
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The first element that is equal to ftw'}]
    },
    {   // Displays the array with after filtering with the above condition
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'FINDINDEX',
        input:[
            {variable:'B'},
            {literal: "ftw"}
        ],
        output: 'C'
    },
    { // The index of first element that is equal to ftw
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The index of the first element that is equal to ftw'}]
    },
    {   // Displays the array with after filtering with the above condition
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'FOREACH',
        input:[
            {variable:'A'}
        ],
        output: 'C'
    },
    { // The array after adding 2 to each element.
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after adding 2 to each element'}]
    },
    {   // Displays the array with after filtering with the above condition
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'INDEXOF',
        input:[
            {variable:'A'},
            {literal: 92}
        ],
        output: 'C'
    },
    { // The index of the element 92 in array A is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The index of the element 92 in array A is'}]
    },
    {   // Displays the index of 90
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'ISARRAY',
        input:[
            {variable:'A'}
        ],
        output: 'C'
    },
    { // True if the input is an Array. Here the input is A
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'True if the input is an Array. Here the input is A'}]
    },
    {   // True if input is an array
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'JOIN',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // The joined string formed from the array B
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The joined string formed from the array B'}]
    },
    {   // Displays the string after joining
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'LASTINDEXOF',
        input:[
            {variable:'B'},
            {literal: "ftw"}
        ],
        output: 'C'
    },
    { // The index of ftw,
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The index of ftw,'}]
    },
    {   // Displays the string after joining
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'MAP',
        input:[
            {variable:'B'},
            {literal: "map"}
        ],
        output: 'C'
    },
    { // The array after adding the string "map" to each element.
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after adding the string "map" to each element.'}]
    },
    {   // Displays the string after joining
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'POP',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // The last element of the array is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The last element of the array is'}]
    },
    {   // Displays the string after joining
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'PUSH',
        input:[
            {variable:'B'},
            {literal: "MEANStack"}
        ],
        output: 'C'
    },
    { // THe length of the newly formed array is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'THe length of the newly formed array is'}]
    },
    {   // Displays the string after joining
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'REDUCE',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // THe reduced value of the array is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'THe reduced value of the array is'}]
    },
    {   // Displays the string after joining
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'REDUCERIGHT',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // THe reduced value of the array from the right is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'THe reduced value of the array from the right is'}]
    },
    {   // Displays the string after joining
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'SHIFT',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // The extracted first element from the array is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The extracted first element from the array is'}]
    },
    {   // Displays the element
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'SLICE',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // The sliced array is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The sliced array is'}]
    },
    {   // Displays the sliced array
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'SOME',
        input:[
            {variable:'B'},
            {literal: 30}
        ],
        output: 'C'
    },
    { // True if any of the elementsin the array are less than 30
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'True if any of the elementsin the array are less than 30'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'SORT',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // The array after sorting is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after sorting is'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'SPLICE',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // The array after splicing in is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after splicing in is'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'B'}]
    },
    {
        type: 'ARRAY',
        operation: 'TOSTRING',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // The array after converting to string is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after converting to string is'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'UNSHIFT',
        input:[
            {variable:'B'},
            {literal: 'application'}
        ],
        output: 'C'
    },
    { // The array after unshifting "application" is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after unshifting "application" is'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        type: 'ARRAY',
        operation: 'VALUEOF',
        input:[
            {variable:'B'}
        ],
        output: 'C'
    },
    { // The primitive value of array B is
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The primitive value of array B is'}]
    },
    {
        type: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    }
    // {
    //     type: 'ARRAY',
    //     operation: 'FILL',
    //     input:[
    //         {variable:'A'},
    //         {literal: 'fill in'}
    //     ],
    //     output: 'C'
    // },
    // { // The array A with all elements replaced by "fill in"
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The array A with all elements replaced by "fill in"'}]
    // },
    // {   // Displays the array with the same element. After the fill function
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // }
];

var script = {
    statements: statements
};

var model = {
    A: [103, 56, 67, 90, 92, 89],
    B: ["remove", "web", "development", "ftw"]

};

var runner = require('../script/script.runner.server')();
console.log(model);
runner.run(script, model);
console.log(model);