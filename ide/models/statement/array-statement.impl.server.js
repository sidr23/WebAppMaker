module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {

        var arg1, arg2, arg3, arg4, arg5;
        if(statement.input[0]) {
            arg1 = model[statement.input[0].variable];
            if(typeof arg1 === 'undefined') {
                arg1 = statement.input[0].literal;
            }
        }
        if(statement.input[1]) {
            arg2 = model[statement.input[1].variable];
            if(typeof arg2 === 'undefined') {
                arg2 = statement.input[1].literal;
            }
        }
        if(statement.input[2]) {
            arg3 = model[statement.input[2].variable];
            if(typeof arg3 === 'undefined') {
                arg3 = statement.input[2].literal;
            }
        }
        if(statement.input[3]) {
            arg4 = model[statement.input[3].variable];
            if(typeof arg4 === 'undefined') {
                arg4 = statement.input[3].literal;
            }
        }
        if(statement.input[4]) {
            arg5 = model[statement.input[4].variable];
            if(typeof arg5 === 'undefined') {
                arg5 = statement.input[4].literal;
            }
        }
        
        switch (statement.operation) {
            case 'CONCAT' :
                model[statement.output] = arg1.concat(arg2);
                break;
            case 'EVERY' :
                model[statement.output] = arg1.every(arg3);
                break;
            case 'FILL':
                model[statement.output] = arg1.fill(arg2);
                break;
            case 'FILTER' :
                model[statement.output] = arg1.filter(arg3);
                break;
            case 'FIND' :
                model[statement.output] = arg1.find(arg3);
                break;
            case 'FINDINDEX' :
                model[statement.output] = arg1.findIndex(arg2);
                break;
            case 'FOREACH' :
                arg1.forEach(arg3);
                break;
            case 'INDEXOF' :
                model[statement.output] = arg1.indexOf(arg2);
                break;
            case 'ISARRAY' :
                model[statement.output] = Array.isArray(arg1);
                break;
            case 'JOIN' :
                model[statement.output] = arg1.join();
                break;
            case 'LASTINDEXOF' :
                model[statement.output] = arg1.lastIndexOf(arg2);
                break;
            case 'MAP' :
                model[statement.output] = arg1.map(arg3);
                break;
            case 'POP' :
                model[statement.output] = arg1.pop();
                break;
            case 'PUSH' :
                model[statement.output] = arg1.push(arg2);
                break;
            case 'REDUCE' :
                model[statement.output] = arg1.reduce(arg2);
                break;
            case 'REDUCERIGHT' :
                model[statement.output] = arg1.reduceRight(arg2);
                break;
            case 'SHIFT' :
                model[statement.output] = arg1.shift();
                break;
            case 'SLICE' :
                model[statement.output] = arg1.slice(arg2, arg3);
                break;
            case 'SOME' :
                model[statement.output] = arg1.some(arg3);
                break;
            case 'SORT' :
                model[statement.output] = arg1.sort();
                break;
            case 'SPLICE':
                arg1.splice(arg4, arg5, arg2, arg3);
                break;
            case 'TOSTRING' :
                model[statement.output] = arg1.toString(arg2);
                break;
            case 'UNSHIFT' :
                model[statement.output] = arg1.unshift(arg2);
                break;
            case 'VALUEOF' :
                model[statement.output] = arg1.valueOf();
                break;

        }
        return null;
    }
};
