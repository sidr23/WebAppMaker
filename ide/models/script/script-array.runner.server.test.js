

var statements = [

    {
        name: 'start',
        statementType: 'ARRAY',
        arrayStatement : {
            operation: 'CONCAT',
            array1: {variable: 'A'},
            array2: {variable: 'B'}
        },
        output: 'C'
    },
    { // Display concatenation of A and B arrays
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'Concatenation of array A and array B'}]
    },
    { // Displays concatenation of A and B which is C
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement : {
            operation: 'EVERY',
            array1: {variable: 'A'},
            applicableFunction: {variable: 'E'}
        },
        output: 'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'True if all the elements in the array are even numbers'}]
    },
    {   // Displays true or false based on the function in every
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    }
    // {
    //     type: 'ARRAY',
    //     operation: 'FILTER',
    //     input:[
    //         {variable:'A'},
    //         {literal: 90},
    //         {variable: 'E'}
    //     ],
    //     output: 'C'
    // },
    // { // The array A with all elements which are even
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The array A with all elements which are even'}]
    // },
    // {   // Displays the array with after filtering with the above condition
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'FIND',
    //     input:[
    //         {variable:'B'},
    //         {literal: "ftw"},
    //         {variable: 'F'}
    //     ],
    //     output: 'C'
    // },
    // { // The first element that is equal to ftw
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The first element that is equal to ftw'}]
    // },
    // {   // Displays the array with after filtering with the above condition
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'FINDINDEX',
    //     input:[
    //         {variable:'B'},
    //         {variable: 'F'}
    //     ],
    //     output: 'C'
    // },
    // { // The index of first element that is equal to ftw
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The index of the first element that is equal to ftw'}]
    // },
    // {   // Displays the array with after filtering with the above condition
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'FOREACH',
    //     input:[
    //         {variable:'A'},
    //         {literal: 4},
    //         {variable: 'G'}
    //     ],
    //     output: 'C'
    // },
    // { // The array after adding 2 to each element.
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The array after adding 2 to each element'}]
    // },
    // {
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'A'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'INDEXOF',
    //     input:[
    //         {variable:'A'},
    //         {literal: 920}
    //     ],
    //     output: 'C'
    // },
    // { // The index of the element 92 in array A is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The index of the element 920 in array A is'}]
    // },
    // {   // Displays the index of 90
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'ISARRAY',
    //     input:[
    //         {variable:'A'}
    //     ],
    //     output: 'C'
    // },
    // { // True if the input is an Array. Here the input is A
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'True if the input is an Array. Here the input is A'}]
    // },
    // {   // True if input is an array
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'JOIN',
    //     input:[
    //         {variable:'B'}
    //     ],
    //     output: 'C'
    // },
    // { // The joined string formed from the array B
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The joined string formed from the array B'}]
    // },
    // {   // Displays the string after joining
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'LASTINDEXOF',
    //     input:[
    //         {variable:'B'},
    //         {literal: "ftw"}
    //     ],
    //     output: 'C'
    // },
    // { // The index of ftw,
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The index of ftw,'}]
    // },
    // {   // Displays the string after joining
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'MAP',
    //     input:[
    //         {variable:'B'},
    //         {literal: "map"},
    //         {variable: 'H'}
    //     ],
    //     output: 'C'
    // },
    // { // The array after adding the string "map" to each element.
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The array after adding the string "map" to each element.'}]
    // },
    // {   // Displays the string after joining
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'POP',
    //     input:[
    //         {variable:'B'}
    //     ],
    //     output: 'C'
    // },
    // { // The last element of the array is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The last element of the array is'}]
    // },
    // {   // Displays the string after joining
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'PUSH',
    //     input:[
    //         {variable:'B'},
    //         {literal: "MEANStack"}
    //     ],
    //     output: 'C'
    // },
    // { // THe length of the newly formed array is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'THe length of the newly formed array is'}]
    // },
    // {   // Displays the string after joining
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'REDUCE',
    //     input:[
    //         {variable:'B'},
    //         {variable: 'I'}
    //     ],
    //     output: 'C'
    // },
    // { // THe reduced value of the array is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'THe reduced value of the array is'}]
    // },
    // {   // Displays the string after joining
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'REDUCERIGHT',
    //     input:[
    //         {variable:'B'},
    //         {variable: 'I'}
    //     ],
    //     output: 'C'
    // },
    // { // THe reduced value of the array from the right is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'THe reduced value of the array from the right is'}]
    // },
    // {   // Displays the string after joining
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'SHIFT',
    //     input:[
    //         {variable:'B'}
    //     ],
    //     output: 'C'
    // },
    // { // The extracted first element from the array is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The extracted first element from the array is'}]
    // },
    // {   // Displays the element
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'SLICE',
    //     input:[
    //         {variable:'B'},
    //         {literal: 0},
    //         {literal: 2}
    //     ],
    //     output: 'C'
    // },
    // { // The sliced array is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The sliced array is'}]
    // },
    // {   // Displays the sliced array
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'SOME',
    //     input:[
    //         {variable:'A'},
    //         {literal: 30},
    //         {variable: 'E'}
    //     ],
    //     output: 'C'
    // },
    // {
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'True if any of the elementsin the array is even'}]
    // },
    // {
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'SORT',
    //     input:[
    //         {variable:'B'}
    //     ],
    //     output: 'C'
    // },
    // { // The array after sorting is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The array after sorting is'}]
    // },
    // {
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'SPLICE',
    //     input:[
    //         {variable:'B'},
    //         {literal: "script"},
    //         {literal: "runner"},
    //         {literal: 2},
    //         {literal: 0}
    //     ],
    //     output: 'C'
    // },
    // { // The array after splicing in is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The array after splicing in is'}]
    // },
    // {
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'B'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'TOSTRING',
    //     input:[
    //         {variable:'B'},
    //         {literal: "-"}
    //     ],
    //     output: 'C'
    // },
    // { // The array after converting to string is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The array after converting to string is'}]
    // },
    // {
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'UNSHIFT',
    //     input:[
    //         {variable:'B'},
    //         {literal: 'application'}
    //     ],
    //     output: 'C'
    // },
    // { // The array after unshifting "application" is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The array after unshifting "application" is'}]
    // },
    // {
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'VALUEOF',
    //     input:[
    //         {variable:'B'}
    //     ],
    //     output: 'C'
    // },
    // { // The primitive value of array B is
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{literal: 'The primitive value of array B is'}]
    // },
    // {
    //     type: 'CONSOLE',
    //     operation: 'LOG',
    //     input:[{variable: 'C'}]
    // },
    // {
    //     type: 'ARRAY',
    //     operation: 'FILL',
    //     input:[
    //         {variable:'D'},
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

var isEven = function (element) {
    return (element % 2)==0;
};


var equalTo = function (element) {
    return element === "ftw";
};

var addTwo = function (element, index, array) {
    return array[index] = element * 10;
};

var concatMap = function (element) {
    var temp = element + "map" + "";
    return temp;
};

var reduction = function (ele, total) {
    return ele + total ;
};

var model = {
    A: [103, 55, 67, 91, 92, 89],
    B: ["remove", "web", "development", "ftw"],
    D: [1, 2, 3, 4, 5],
    E: isEven,
    F: equalTo,
    G: addTwo,
    H: concatMap,
    I: reduction

};

var runner = require('../script/script.runner.server')();
console.log(model);
runner.run(script, model);
console.log(model);