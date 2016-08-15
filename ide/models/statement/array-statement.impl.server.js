module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {

        var array1, array2, applicableFunction, singleElement, index1, index2;
        if(statement.arrayStatement.array1){
            array1 = model[statement.arrayStatement.array1.variable];
            if(typeof array1 === 'undefined') {
                array1 = statement.arrayStatement.array1.literal;
            }
        }
        if(statement.arrayStatement.array2){
            array2 = model[statement.arrayStatement.array2.variable];
            if(typeof array2 === 'undefined') {
                array2 = statement.arrayStatement.array2.literal;
            }
        }
        if(statement.arrayStatement.applicableFunction){
            applicableFunction = model[statement.arrayStatement.applicableFunction.variable];
            if(typeof applicableFunction === 'undefined') {
                applicableFunction = statement.arrayStatement.applicableFunction.literal;
            }
        }
        if(statement.arrayStatement.singleElement){
            singleElement = model[statement.arrayStatement.singleElement.variable];
            if(typeof singleElement === 'undefined') {
                singleElement = statement.arrayStatement.singleElement.literal;
            }
        }
        if(statement.arrayStatement.index1){
            index1 = model[statement.arrayStatement.index1.variable];
            if(typeof index1 === 'undefined') {
                index1 = statement.arrayStatement.index1.literal;
            }
        }
        if(statement.arrayStatement.index2){
            index2 = model[statement.arrayStatement.index2.variable];
            if(typeof index2 === 'undefined') {
                index2 = statement.arrayStatement.index2.literal;
            }
        }


        switch (statement.arrayStatement.operation) {
            case 'CONCAT' :
                model[statement.output] = array1.concat(array2);
                break;
            case 'EVERY' :
                model[statement.output] = array1.every(applicableFunction);
                break;
            case 'FILL':
                model[statement.output] = array1.fill(singleElement);
                break;
            case 'FILTER' :
                model[statement.output] = array1.filter(applicableFunction);
                break;
            case 'FIND' :
                model[statement.output] = array1.find(applicableFunction);
                break;
            case 'FINDINDEX' :
                model[statement.output] = array1.findIndex(applicableFunction);
                break;
            case 'FOREACH' :
                array1.forEach(applicableFunction);
                break;
            case 'INDEXOF' :
                model[statement.output] = array1.indexOf(singleElement);
                break;
            case 'ISARRAY' :
                model[statement.output] = Array.isArray(array1);
                break;
            case 'JOIN' :
                model[statement.output] = array1.join(singleElement);
                break;
            case 'LASTINDEXOF' :
                model[statement.output] = array1.lastIndexOf(singleElement);
                break;
            case 'MAP' :
                model[statement.output] = array1.map(applicableFunction);
                break;
            case 'POP' :
                model[statement.output] = array1.pop();
                break;
            case 'PUSH' :
                model[statement.output] = array1.push(singleElement);
                break;
            case 'REDUCE' :
                model[statement.output] = array1.reduce(applicableFunction);
                break;
            case 'REDUCERIGHT' :
                model[statement.output] = array1.reduceRight(applicableFunction);
                break;
            case 'SHIFT' :
                model[statement.output] = array1.shift();
                break;
            case 'SLICE' :
                model[statement.output] = array1.slice(index1, index2);
                break;
            case 'SOME' :
                model[statement.output] = array1.some(applicableFunction);
                break;
            case 'SORT' :
                model[statement.output] = array1.sort();
                break;
            case 'SPLICE':
                array1.splice(index1, index2, singleElement);
                break;
            case 'TOSTRING' :
                model[statement.output] = array1.toString();
                break;
            case 'UNSHIFT' :
                model[statement.output] = array1.unshift(singleElement);
                break;
            case 'VALUEOF' :
                model[statement.output] = array1.valueOf();
                break;

        }
        return null;
    }
};
