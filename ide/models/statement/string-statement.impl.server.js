module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {
        var operand1, operand2;

        if(statement.input[0]) {
            operand1 = model[statement.input[0].variable];
            if(typeof operand1 === 'undefined') {
                operand1 = statement.input[0].literal;
            }
        }
        if(statement.input[1]) {
            operand2 = model[statement.input[1].variable];
            if(typeof operand2 === 'undefined') {
                operand2 = statement.input[1].literal;
            }
        }
        if(statement.input[2]) {
            operand3 = model[statement.input[2].variable];
            if(typeof operand3 === 'undefined') {
                operand3 = statement.input[2].literal;
            }
        }
        switch (statement.operation) {
            case 'VARIABLE' :
                break;
            case 'CONCATENATE' :
                model[statement.output] = operand1 + operand2;
                break;
            case 'SUBSTRING' :
                model[statement.output] = operand1.substring(operand2,operand3);
                break;
            case 'SUBSTR' :
                model[statement.output] = operand1.substr(operand2,operand3);
                break;
            case 'LENGTH' :
                model[statement.output] = operand1.length;
                break;
            case 'INCLUDES' :
                model[statement.output] = operand1.includes(operand2);
                break;
            case 'INDEXOF'  :
                model[statement.output] = operand1.indexOf(operand2);
                break;
            case 'CHARAT'   :
                model[statement.output] = operand1.charAt(operand2);
                break;
            case 'CHARCODEAT'   :
                model[statement.output] = operand1.charCodeAt(operand2);
                break;
            case 'LASTINDEXOF' :
                model[statement.output] = operand1.lastIndexOf(operand2);
                break;
            case 'SEARCH'   :
                model[statement.output] = operand1.search(operand2);
                break;
            case 'REPEAT'   :
                model[statement.output] = operand1.repeat(operand2);
                break;
            case 'REPLACE'  :
                model[statement.output] = operand1.replace(operand2,operand3);
                break;
            case 'REPLACEALL'  :
                var regexopr = new RegExp(operand2,'g');
                model[statement.output] = operand1.replace(regexopr,operand3);
                break;
            case 'SLICE'    :
                model[statement.output] = operand1.slice(operand2,operand3);
                break;
            case 'LOWERCASE':
                model[statement.output] = operand1.toLowerCase();
                break;
            case 'LOCALELOWERCASE':
                model[statement.output] = operand1.toLowerCase();
                break;
            case 'UPPERCASE':
                model[statement.output] = operand1.toUpperCase();
                break;
            case 'LOCALEUPPERCASE':
                model[statement.output] = operand1.toUpperCase();
                break;
            case 'TRIM'     :
                model[statement.output] = operand1.trim();
                break;
            case 'LOCALECOMPARE':
                model[statement.output] = operand1.localeCompare(operand2);
                break;
            case 'MATCH':
                var regexopr = new RegExp(operand2,'g');
                model[statement.output] = operand1.match(regexopr);
                break;
            case 'SPLIT':
                model[statement.output] = operand1.split(operand2);
                break;
            case 'STARTSWITH':
                model[statement.output] = operand1.startsWith(operand2);
                break;
            case 'ENDSWITH':
                model[statement.output] = operand1.endsWith(operand2);
                break;
            case 'VALUEOF':
                model[statement.output] = operand1.valueOf();
                break;
        }
        return null;
    }
};
