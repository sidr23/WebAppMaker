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
            case 'AND' :
                model[statement.output] =  arg1 && arg2;
				break;
            case 'OR' :
                model[statement.output] =  arg1 || arg2;
				break;		
			case 'XOR':
                model[statement.output] =  arg1 ? !arg2 : arg2;
				break;
			case 'NOT':
                model[statement.output] =  !arg1;
				break;
			case 'NAND':
                model[statement.output] =  !(arg1 && arg2);
				break;
			case 'NOR':
                model[statement.output] =  !(arg1 || arg2);
				break;
			case 'Eval' :
                model[statement.output] =  arg1;
				break;
        }
        return null;
    }
};
