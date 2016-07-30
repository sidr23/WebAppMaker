/**
 * Created by ameyapandilwar on 7/29/16.
 */

module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {
        switch (statement.operation) {
            case 'New Date':
                model[statement.output] = new Date().toString();
                break;
            
            case 'Date From String':
                var str;
                if(statement.input[0]) {
                    str = model[statement.input[0].variable];
                    if(typeof str === 'undefined') {
                        str = statement.input[0].literal;
                    }
                }
                var ms = Date.parse(str);

                model[statement.output] = new Date(ms);
                break;
            
            case 'Date From Milliseconds':
                var operand;
                if(statement.input[0]) {
                    operand = model[statement.input[0].variable];
                    if(typeof operand === 'undefined') {
                        operand = statement.input[0].literal;
                    }
                }
                model[statement.output] = new Date(operand);
                break;
            
            case 'Date From Parameters':
                var year, month, day, hours, minutes, seconds, milliseconds;
                if(statement.input[0]) {
                    operand = model[statement.input[0].variable];
                    if(typeof operand === 'undefined') {
                        year = statement.input[0].literal;
                    }
                }
                if(statement.input[1]) {
                    operand = model[statement.input[1].variable];
                    if(typeof operand === 'undefined') {
                        month = statement.input[1].literal - 1;
                    }
                }
                if(statement.input[2]) {
                    operand = model[statement.input[2].variable];
                    if(typeof operand === 'undefined') {
                        day = statement.input[2].literal;
                    }
                }
                if(statement.input[3]) {
                    operand = model[statement.input[3].variable];
                    if(typeof operand === 'undefined') {
                        hours = statement.input[3].literal;
                    }
                }
                if(statement.input[4]) {
                    operand = model[statement.input[4].variable];
                    if(typeof operand === 'undefined') {
                        minutes = statement.input[4].literal;
                    }
                }
                if(statement.input[5]) {
                    operand = model[statement.input[5].variable];
                    if(typeof operand === 'undefined') {
                        seconds = statement.input[5].literal;
                    }
                }
                if(statement.input[6]) {
                    operand = model[statement.input[6].variable];
                    if(typeof operand === 'undefined') {
                        milliseconds = statement.input[6].literal;
                    }
                }
                model[statement.output] = new Date(year, month, day, hours, minutes, seconds, milliseconds);
                break;
        }
        return null;
    }
};