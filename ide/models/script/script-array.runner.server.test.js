

var statements = [

    {
        name: 'start',
        statementType: 'ARRAY',
        arrayStatement : {
            operation: 'CONCAT',
            array1: {variable: 'A'},
            array2: {literal: ["mongodb", "expressjs", "angularjs", "nodejs"]}
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
    },
    {
        statementType: 'ARRAY',
        arrayStatement : {
            operation: 'FILTER',
            array1: {variable: 'A'},
            applicableFunction: {literal: function (element) {
                return (element % 2)==0;
            }}
            // applicableFunction: {variable: 'E'}
        },
        output: 'C'
    },
    { // The array A with all elements which are even
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array A with all elements which are even'}]
    },
    {   // Displays the array with after filtering with the above condition
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'FIND',
            array1: {variable: 'B'},
            applicableFunction: {variable: 'F'}
        },
        output: 'C'
    },
    { // The first element that is equal to ftw
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The first element that is equal to ftw'}]
    },
    {   // Displays the array with after filtering with the above condition
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'FINDINDEX',
            array1: {literal: ["web", "dev", "ftw"]},
            applicableFunction: {variable: 'F'}
        },
        output: 'C'
    },
    { // The index of first element that is equal to ftw
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The index of the first element that is equal to ftw'}]
    },
    {   // Displays the array with after filtering with the above condition
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'FOREACH',
            array1: {variable: 'A'},
            applicableFunction: {variable: 'G'}
        },
        output: 'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after multiplying each element with 10'}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'A'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'INDEXOF',
            array1: {variable:'A'},
            singleElement: {literal: 920}
        },
        output: 'C'
    },
    { // The index of the element 92 in array A is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The index of the element 920 in array A is'}]
    },
    {   // Displays the index of 920
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'ISARRAY',
            array1: {literal: [123, 456, 675]}
        },
        output: 'C'
    },
    { // True if the input is an Array. Here the input is A
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'True if the input is an Array. Here the input is A'}]
    },
    {   // True if input is an array
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'JOIN',
            array1: {variable: 'A'},
            singleElement: {literal : '-'}
        },
        output: 'C'
    },
    { // The joined string formed from the array B
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The joined string formed from the array B'}]
    },
    {   // Displays the string after joining
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'LASTINDEXOF',
            array1: {variable:'B'},
            singleElement: {literal: "ftw"}
        },
        output: 'C'
    },
    { // The index of ftw,
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The index of ftw when searched from the end,'}]
    },
    {   // Displays the string after joining
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'MAP',
            array1: {variable:'B'},
            applicableFunction: {variable: 'H'}
        },
        output: 'C'
    },
    { // The array after adding the string "map" to each element.
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after adding the string "map" to each element.'}]
    },
    {   // Displays the string after joining
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'POP',
            array1: {variable:'B'}
        },
        output: 'C'
    },
    { // The last element of the array is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The last element of the array is'}]
    },
    {   // Displays the string after joining
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'PUSH',
            array1: {variable:'B'},
            singleElement: {literal: 'MEANStack'}
        },
        output: 'C'
    },
    { // THe length of the newly formed array is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'THe length of the newly formed array is'}]
    },
    {   // Displays the string after joining
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'REDUCE',
            array1: {variable: 'B'},
            applicableFunction: {variable: 'I'}
        },
        output: 'C'
    },
    { // THe reduced value of the array is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'THe reduced value of the array is'}]
    },
    {   // Displays the string after joining
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'REDUCERIGHT',
            array1: {variable: 'B'},
            applicableFunction: {variable: 'I'}
        },
        output: 'C'
    },
    { // THe reduced value of the array from the right is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'THe reduced value of the array from the right is'}]
    },
    {   // Displays the string after joining
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'SHIFT',
            array1: {variable:'B'}
        },
        output: 'C'
    },
    { // The extracted first element from the array is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The extracted first element from the array is'}]
    },
    {   // Displays the element
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'SLICE',
            array1: {variable:'B'},
            index1: {literal: 0},
            index2: {literal: 2}
        },
        output: 'C'
    },
    { // The sliced array is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The sliced array is'}]
    },
    {   // Displays the sliced array
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'SOME',
            array1: {variable:'A'},
            applicableFunction: {variable: 'E'}
        },
        output: 'C'
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'True if any of the elementsin the array is even'}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'SORT',
            array1: {variable:'B'}
        },
        output: 'C'
    },
    { // The array after sorting is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after sorting is'}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'SPLICE',
            array1: {variable:'B'},
            singleElement: {literal: 'script'},
            index1: {literal: 2},
            index2: {literal: 0}
        },
        output: 'C'
    },
    { // The array after splicing in is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after splicing in is'}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'B'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'TOSTRING',
            array1: {literal: [123, 234, 345, 456, 567]}
        },
        output: 'C'
    },
    { // The array after converting to string is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after converting to string is'}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'UNSHIFT',
            array1: {variable:'B'},
            singleElement: {literal: 'application'}
       },
        output: 'C'
    },
    { // The array after unshifting "application" is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array after unshifting "application" is'}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'VALUEOF',
            array1: {variable:'B'}
        },
        output: 'C'
    },
    { // The primitive value of array B is
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The primitive value of array B is'}]
    },
    {
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    },
    {
        statementType: 'ARRAY',
        arrayStatement: {
            operation: 'FILL',
            array1: {variable:'D'},
            singleElement: {literal: 'fill in'}
        },
        output: 'C'
    },
    { // The array A with all elements replaced by "fill in"
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{literal: 'The array A with all elements replaced by "fill in"'}]
    },
    {   // Displays the array with the same element. After the fill function
        statementType: 'CONSOLE',
        operation: 'LOG',
        input:[{variable: 'C'}]
    }
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

var multiplyTen = function (element, index, array) {
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
    G: multiplyTen,
    H: concatMap,
    I: reduction

};

var runner = require('../script/script.runner.server')();
console.log(model);
runner.run(script, model);
console.log(model);