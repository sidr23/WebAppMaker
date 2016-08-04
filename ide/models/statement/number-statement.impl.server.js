module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {

//      console.log(statement, model);
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

        switch (statement.operation) {
            case 'VARIABLE' :
                model[statement.output] = operand1;
                break;
            case 'ADDITION' :
                model[statement.output] = operand1 + operand2;
                break;
            case 'SUBTRACTION' :
                model[statement.output] = operand1 - operand2;
                break;
            case 'MULTIPLICATION' :
                model[statement.output] = operand1 * operand2;
                break;
            case 'DIVISION' :
                model[statement.output] = operand1 / operand2;
                break;
            case 'GREATER_THAN' :
                model[statement.output] = operand1 > operand2;
                break;
            case 'GREATER_THAN_EQUAL_TO' :
                model[statement.output] = operand1 >= operand2;
                break;
            case 'LESSER_THAN' :
                model[statement.output] = operand1 < operand2;
                break;
            case 'LESSER_THAN_EQUAL_TO' :
                model[statement.output] = operand1 <= operand2;
                break;
            case 'EQUAL_TO' :
                model[statement.output] = operand1 == operand2;
                break;
            case 'POWER' :
                model[statement.output] = Math.pow(operand1 , operand2);
                break;
            case 'LOGARITHM' :
                model[statement.output] = Math.log(operand1);
                break;
            case 'ROUND' :
                model[statement.output] = Math.round(operand1);
                break;
            case 'ABSOLUTE' :
                model[statement.output] = Math.abs(operand1);
                break;
            case 'EXPONENTIAL' :
                model[statement.output] = Math.exp(operand1);
                break;
            case 'COS' :
                model[statement.output] = Math.cos(operand1);
                break;
            case 'SIN' :
                model[statement.output] = Math.sin(operand1);
                break;
            case 'TAN' :
                model[statement.output] = Math.tan(operand1);
                break;
            case 'CEIL' :
                model[statement.output] = Math.ceil(operand1);
                break;
            case 'FLOOR' :
                model[statement.output] = Math.floor(operand1);
                break;
            case 'SQRT' :
                model[statement.output] = Math.sqrt(operand1);
                break;
        }
        return null;
    }
};
