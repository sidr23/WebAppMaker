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

            // creates a new date
            case 'New Date':
                model[statement.output] = new Date().toString();
                break;

            // creates a new date based on the provided string
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

            // creates a new date from the provided milliseconds
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

            // creates a new date based on the provided date parameters
            // year, month, day, hours, minutes, seconds, milliseconds
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

            // adds the specified value to the provided parameter
            // eg. add 6 hours to provided date; add 10 years to provided date
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

            // subtracts the specified value from the provided parameter
            // eg. subtract 4 days from the provided date; subtract 900 minutes from the provided date
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

            // converts the date into the GMT/UTC (Coordinated Universal Time) date time format
            case 'To UTC Format':
                var str;
                if (statement.input[0]) {
                    str = model[statement.input[0].variable];
                    if (typeof str === 'undefined') {
                        str = statement.input[0].literal;
                    }
                }
                var ms = Date.parse(str);

                model[statement.output] = new Date(ms).toUTCString();
                break;

            // converts the date into the local date time format
            case 'To Local Format':
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
        }
        return null;
    }
};