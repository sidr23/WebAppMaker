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
                if (statement.input[0]) {
                    str = model[statement.input[0].variable];
                    if (typeof str === 'undefined') {
                        str = statement.input[0].literal;
                    }
                }
                var ms = Date.parse(str);

                model[statement.output] = new Date(ms);
                break;

            case 'Date From Milliseconds':
                var operand;
                if (statement.input[0]) {
                    operand = model[statement.input[0].variable];
                    if (typeof operand === 'undefined') {
                        operand = statement.input[0].literal;
                    }
                }
                model[statement.output] = new Date(operand);
                break;

            case 'Date From Parameters':
                var year, month, day, hours, minutes, seconds, milliseconds;
                if (statement.input[0]) {
                    operand = model[statement.input[0].variable];
                    if (typeof operand === 'undefined') {
                        year = statement.input[0].literal;
                    }
                }
                if (statement.input[1]) {
                    operand = model[statement.input[1].variable];
                    if (typeof operand === 'undefined') {
                        month = statement.input[1].literal - 1;
                    }
                }
                if (statement.input[2]) {
                    operand = model[statement.input[2].variable];
                    if (typeof operand === 'undefined') {
                        day = statement.input[2].literal;
                    }
                }
                if (statement.input[3]) {
                    operand = model[statement.input[3].variable];
                    if (typeof operand === 'undefined') {
                        hours = statement.input[3].literal;
                    }
                }
                if (statement.input[4]) {
                    operand = model[statement.input[4].variable];
                    if (typeof operand === 'undefined') {
                        minutes = statement.input[4].literal;
                    }
                }
                if (statement.input[5]) {
                    operand = model[statement.input[5].variable];
                    if (typeof operand === 'undefined') {
                        seconds = statement.input[5].literal;
                    }
                }
                if (statement.input[6]) {
                    operand = model[statement.input[6].variable];
                    if (typeof operand === 'undefined') {
                        milliseconds = statement.input[6].literal;
                    }
                }
                model[statement.output] = new Date(year, month, day, hours, minutes, seconds, milliseconds);
                break;

            case 'Add':
                var operand;
                if (statement.input[0]) {
                    operand = model[statement.input[0].variable];
                    if (typeof operand === 'undefined') {
                        operand = statement.input[0].literal;
                    }
                }
                var data = new Date(Date.parse(operand));
                
                if (statement.value === 'Years') {
                    var years;
                    if (statement.input[1]) {
                        years = model[statement.input[1].variable];
                        if (typeof years === 'undefined') {
                            years = statement.input[1].literal;
                        }
                    }

                    data.setFullYear(data.getFullYear() + years);
                } else if (statement.value === 'Months') {
                    var months;
                    if (statement.input[1]) {
                        months = model[statement.input[1].variable];
                        if (typeof months === 'undefined') {
                            months = statement.input[1].literal;
                        }
                    }

                    data.setMonth(data.getMonth() + months);
                } else if (statement.value === 'Days') {
                    var days;
                    if (statement.input[1]) {
                        days = model[statement.input[1].variable];
                        if (typeof days === 'undefined') {
                            days = statement.input[1].literal;
                        }
                    }

                    data.setHours(data.getHours() + (days * 24));
                    
                } else if (statement.value === 'Hours') {
                    var hours;
                    if (statement.input[1]) {
                        hours = model[statement.input[1].variable];
                        if (typeof hours === 'undefined') {
                            hours = statement.input[1].literal;
                        }
                    }

                    data.setHours(data.getHours() + hours);
                } else if (statement.value === 'Minutes') {
                    var minutes;
                    if (statement.input[1]) {
                        minutes = model[statement.input[1].variable];
                        if (typeof minutes === 'undefined') {
                            minutes = statement.input[1].literal;
                        }
                    }

                    data.setMinutes(data.getMinutes() + minutes);
                } else if (statement.value === 'Seconds') {
                    var seconds;
                    if (statement.input[1]) {
                        seconds = model[statement.input[1].variable];
                        if (typeof seconds === 'undefined') {
                            seconds = statement.input[1].literal;
                        }
                    }

                    data.setSeconds(data.getSeconds() + seconds);
                }

                model[statement.output] = data;
                break;

            case 'Subtract':
                var operand;
                if (statement.input[0]) {
                    operand = model[statement.input[0].variable];
                    if (typeof operand === 'undefined') {
                        operand = statement.input[0].literal;
                    }
                }
                var data = new Date(Date.parse(operand));

                if (statement.value === 'Years') {
                    var years;
                    if (statement.input[1]) {
                        years = model[statement.input[1].variable];
                        if (typeof years === 'undefined') {
                            years = statement.input[1].literal;
                        }
                    }

                    data.setFullYear(data.getFullYear() - years);
                } else if (statement.value === 'Months') {
                    var months;
                    if (statement.input[1]) {
                        months = model[statement.input[1].variable];
                        if (typeof months === 'undefined') {
                            months = statement.input[1].literal;
                        }
                    }

                    data.setMonth(data.getMonth() - months);
                } else if (statement.value === 'Days') {
                    var days;
                    if (statement.input[1]) {
                        days = model[statement.input[1].variable];
                        if (typeof days === 'undefined') {
                            days = statement.input[1].literal;
                        }
                    }

                    data.setHours(data.getHours() - (days * 24));

                } else if (statement.value === 'Hours') {
                    var hours;
                    if (statement.input[1]) {
                        hours = model[statement.input[1].variable];
                        if (typeof hours === 'undefined') {
                            hours = statement.input[1].literal;
                        }
                    }

                    data.setHours(data.getHours() - hours);
                } else if (statement.value === 'Minutes') {
                    var minutes;
                    if (statement.input[1]) {
                        minutes = model[statement.input[1].variable];
                        if (typeof minutes === 'undefined') {
                            minutes = statement.input[1].literal;
                        }
                    }

                    data.setMinutes(data.getMinutes() - minutes);
                } else if (statement.value === 'Seconds') {
                    var seconds;
                    if (statement.input[1]) {
                        seconds = model[statement.input[1].variable];
                        if (typeof seconds === 'undefined') {
                            seconds = statement.input[1].literal;
                        }
                    }

                    data.setSeconds(data.getSeconds() - seconds);
                }

                model[statement.output] = data;
                break;
        }
        return null;
    }
};