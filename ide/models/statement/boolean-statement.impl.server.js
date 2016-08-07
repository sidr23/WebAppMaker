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
            case 'Equal to':
                model[statement.output] =  arg1 == arg2;
				break;
            case 'Greater than' :
                model[statement.output] =  arg1 > arg2;
				break;
            case 'Greater than or equal' :
                model[statement.output] =  arg1 >= arg2;
				break;
            case 'Less than' :
                model[statement.output] =  arg1 < arg2;
				break;
            case 'Less than or equal' :
                model[statement.output] =  arg1 <= arg2;
				break;
        }
        return null;
    }
};
