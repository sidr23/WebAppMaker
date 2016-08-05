module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {

        var arg1, arg2;
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

        switch (statement.operation) {
            case 'CONCAT' :
                model[statement.output] = arg1.concat(arg2);
                break;
            case 'EVERY' :
                model[statement.output] = arg1.every(function (element) {
                    return element >= arg2;
                });
                break;
            case 'FILL':
                model[statement.output] = arg1.fill(arg2);
                break;
            case 'FILTER' :
                model[statement.output] = arg1.filter(function (element) {
                    return element >= arg2;
                });
                break;
            case 'FIND' :
                model[statement.output] = arg1.find(function (element) {
                    return element === arg2;
                });
                break;
            case 'FINDINDEX' :
                model[statement.output] = arg1.findIndex(function (element) {
                    return element === arg2;
                });
                break;
            case 'FOREACH' :
                var sum = 0;
                arg1.forEach(function (element) {
                    sum += element;
                });
                model[statement.output] = sum;
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
                model[statement.output] = arg1.map(function (element) {
                    var temp = element + arg2 + "";
                    return temp;
                });
                break;
            case 'POP' :
                model[statement.output] = arg1.pop();
                break;
            case 'PUSH' :
                model[statement.output] = arg1.push(arg2);
                break;
            case 'REDUCE' :
                model[statement.output] = arg1.reduce(function (ele, total) {
                    return ele + total ;
                });
                break;
            case 'REDUCERIGHT' :
                model[statement.output] = arg1.reduceRight(function (ele, total) {
                    return ele + total ;
                });
                break;
            case 'SHIFT' :
                model[statement.output] = arg1.shift();
                break;
            case 'SLICE' :
                model[statement.output] = arg1.slice(0,2);
                break;
            case 'SOME' :
                model[statement.output] = arg1.some(function (element) {
                    return element <= arg2;
                });
                break;
            case 'SORT' :
                model[statement.output] = arg1.sort();
                break;
            case 'SPLICE':
                arg1.splice(2, 0, "script", "runner");
                break;
            case 'TOSTRING' :
                model[statement.output] = arg1.toString();
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
