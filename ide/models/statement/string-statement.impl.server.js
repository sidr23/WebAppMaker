module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {
        switch (statement.operation) {
            case 'VARIABLE' :
                break;
            case 'CONCATENATE' :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                model[statement.output] = operand1 + operand2;
                break;

            case 'SUBSTRING' :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                model[statement.output] = operand1.substr(operand2);
                break;
            case 'LENGTH' :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                model[statement.output] = operand1.length;
                break;
            case 'INCLUDES' :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                model[statement.output] = operand1.includes(operand2);
                break;
            case 'INDEXOF'  :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                model[statement.output] = operand1.indexOf(operand2);
                break;
            case 'CHARAT'   :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                model[statement.output] = operand1.charAt(operand2);
                break;
            case 'LASTINDEXOF' :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                model[statement.output] = operand1.lastIndexOf(operand2);
                break;
            case 'SEARCH'   :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                model[statement.output] = operand1.search(operand2);
                break;
            case 'REPEAT'   :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                model[statement.output] = operand1.repeat(operand2);
                break;
            case 'REPLACE'  :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                var operand3 = model[statement.input[2].variable];
                if(!operand3) {
                    var operand3 = statement.input[2].literal;
                }
                model[statement.output] = operand1.replace(operand2,operand3);
                break;
            case 'SLICE'    :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                var operand2 = model[statement.input[1].variable];
                if(!operand2) {
                    var operand2 = statement.input[1].literal;
                }
                model[statement.output] = operand1.slice(operand2); //NUMBER
                break;
            case 'LOWERCASE':
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                model[statement.output] = operand1.toLowerCase();
                break;
            case 'UPPERCASE':
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                model[statement.output] = operand1.toUpperCase();
                break;
            case 'TRIM'     :
                var operand1 = model[statement.input[0].variable];
                if(!operand1) {
                    var operand1 = statement.input[0].literal;
                }
                model[statement.output] = operand1.trim();
                break;
        }
        return null;
    }
};
