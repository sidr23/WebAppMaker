module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {

        var array1, array2;
        if(statement.input[0]) {
            array1 = model[statement.input[0].variable];
            if(typeof array1 === 'undefined') {
                array1 = statement.input[0].literal;
            }
        }
        if(statement.input[1]) {
            array2 = model[statement.input[1].variable];
            if(typeof array2 === 'undefined') {
                array2 = statement.input[1].literal;
            }
        }

        switch (statement.operation) {
            case 'CONCAT' :
                model[statement.output] = array1.concat(array2);
                break;
            case 'EVERY' :
                model[statement.output] = array1.every(function (element) {
                    return element >= 90;
                });
                break;
        }
        return null;
    }
};
