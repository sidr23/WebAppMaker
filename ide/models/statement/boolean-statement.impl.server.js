module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {

        var operand1, operand2;
        if(statement.booleanStatement.operand1) {
            operand1 = model[statement.booleanStatement.operand1.variable];
            if(typeof operand1 === 'undefined') {
                operand1 = statement.booleanStatement.operand1.literal;
            }
        }
        if(statement.booleanStatement.operand2) {
            operand2 = model[statement.booleanStatement.operand2.variable];
            if(typeof operand2 === 'undefined') {
                operand2 = statement.booleanStatement.operand2.literal;
            }
        }

        switch (statement.booleanStatement.operation) {
            case 'AND' :
                model[statement.output] =  operand1 && operand2;
				break;
            case 'OR' :
                model[statement.output] =  operand1 || operand2;
				break;		
			case 'XOR':
                model[statement.output] =  operand1 ? !operand2 : operand2;
				break;
			case 'NOT':
                model[statement.output] =  !operand1;
				break;
			case 'NAND':
                model[statement.output] =  !(operand1 && operand2);
				break;
			case 'NOR':
                model[statement.output] =  !(operand1 || operand2);
				break;
			case 'EVAL' :
                model[statement.output] =  operand1;
				break;
        }
        return null;
    }
};
