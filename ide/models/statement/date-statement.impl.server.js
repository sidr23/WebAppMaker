/**
 * Created by ameyapandilwar on 7/29/16.
 */

var moment = require("moment");

module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {

        var dateString, date, year, month, day, hours, minutes, seconds, milliseconds;
        var value1, value2, operand, locale, operand1, operand2;

        if (statement.dateStatement.dateString) {
            dateString = model[statement.dateStatement.dateString.variable];
            if (typeof dateString === 'undefined') {
                dateString = statement.dateStatement.dateString.literal;
            }
        }

        if (statement.dateStatement.date) {
            date = model[statement.dateStatement.date.variable];
            if (typeof date === 'undefined') {
                date = statement.dateStatement.date.literal;
            }
        }

        if (statement.dateStatement.year) {
            year = model[statement.dateStatement.year.variable];
            if (typeof year === 'undefined') {
                year = statement.dateStatement.year.literal;
            }
        }

        if (statement.dateStatement.month) {
            month = model[statement.dateStatement.month.variable];
            if (typeof month === 'undefined') {
                month = statement.dateStatement.month.literal;
            }
            month -= 1;
        }

        if (statement.dateStatement.day) {
            day = model[statement.dateStatement.day.variable];
            if (typeof day === 'undefined') {
                day = statement.dateStatement.day.literal;
            }
        }

        if (statement.dateStatement.hours) {
            hours = model[statement.dateStatement.hours.variable];
            if (typeof hours === 'undefined') {
                hours = statement.dateStatement.hours.literal;
            }
        }

        if (statement.dateStatement.minutes) {
            minutes = model[statement.dateStatement.minutes.variable];
            if (typeof minutes === 'undefined') {
                minutes = statement.dateStatement.minutes.literal;
            }
        }

        if (statement.dateStatement.seconds) {
            seconds = model[statement.dateStatement.seconds.variable];
            if (typeof seconds === 'undefined') {
                seconds = statement.dateStatement.seconds.literal;
            }
        }

        if (statement.dateStatement.milliseconds) {
            milliseconds = model[statement.dateStatement.milliseconds.variable];
            if (typeof milliseconds === 'undefined') {
                milliseconds = statement.dateStatement.milliseconds.literal;
            }
        }

        if (statement.dateStatement.operand) {
            operand = model[statement.dateStatement.operand.variable];
            if (typeof operand === 'undefined') {
                operand = statement.dateStatement.operand.literal;
            }
        }

        if (statement.dateStatement.value1) {
            value1 = model[statement.dateStatement.value1.variable];
            if (typeof value1 === 'undefined') {
                value1 = statement.dateStatement.value1.literal;
            }
        }

        if (statement.dateStatement.value2) {
            value2 = model[statement.dateStatement.value2.variable];
            if (typeof value2 === 'undefined') {
                value2 = statement.dateStatement.value2.literal;
            }
        }

        if (statement.dateStatement.locale) {
            locale = model[statement.dateStatement.locale.variable];
            if (typeof locale === 'undefined') {
                locale = statement.dateStatement.locale.literal;
            }
        }

        if (statement.dateStatement.operand1) {
            operand1 = model[statement.dateStatement.operand1.variable];
            if (typeof operand1 === 'undefined') {
                operand1 = statement.dateStatement.operand1.literal;
            }
        }

        if (statement.dateStatement.operand2) {
            operand2 = model[statement.dateStatement.operand2.variable];
            if (typeof operand2 === 'undefined') {
                operand2 = statement.dateStatement.operand2.literal;
            }
        }

        switch (statement.dateStatement.operation) {

            // creates a new date (can also pass in a `Date` object as a parameter)
            case 'NEW_DATE':
                if (typeof operand1 === 'undefined') {
                    model[statement.output] = new Date().toString();
                } else {
                    model[statement.output] = operand1.toString();
                }
                break;

            // creates a new date based on the provided string
            case 'DATE_FROM_STRING':
                var ms = Date.parse(dateString);

                model[statement.output] = new Date(ms);
                break;

            // creates a new date from the provided milliseconds
            case 'DATE_FROM_MILLISECONDS':
                model[statement.output] = new Date(milliseconds);
                break;

            // creates a new date based on the provided date parameters
            // year, month, day, hours, minutes, seconds, milliseconds
            case 'DATE_FROM_PARAMETERS':
                model[statement.output] = new Date(year, month, day, hours, minutes, seconds, milliseconds);
                break;

            // adds the specified value to the provided parameter
            // eg. add 6 hours to provided date; add 10 years to provided date
            case 'ADD':
                var data = new Date(Date.parse(operand));

                if (value2 === 'Years') {
                    data.setFullYear(data.getFullYear() + value1);
                } else if (value2 === 'Months') {
                    data.setMonth(data.getMonth() + value1);
                } else if (value2 === 'Days') {
                    data.setHours(data.getHours() + (value1 * 24));
                } else if (value2 === 'Hours') {
                    data.setHours(data.getHours() + value1);
                } else if (value2 === 'Minutes') {
                    data.setMinutes(data.getMinutes() + value1);
                } else if (value2 === 'Seconds') {
                    data.setSeconds(data.getSeconds() + value1);
                }

                model[statement.output] = data;
                break;

            // subtracts the specified value from the provided parameter
            // eg. subtract 4 days from the provided date; subtract 900 minutes from the provided date
            case 'SUBTRACT':
                var data = new Date(Date.parse(operand));
                
                if (value2 === 'Years') {
                    data.setFullYear(data.getFullYear() - value1);
                } else if (value2 === 'Months') {
                    data.setMonth(data.getMonth() - value1);
                } else if (value2 === 'Days') {
                    data.setHours(data.getHours() - (value1 * 24));
                } else if (value2 === 'Hours') {
                    data.setHours(data.getHours() - value1);
                } else if (value2 === 'Minutes') {
                    data.setMinutes(data.getMinutes() - value1);
                } else if (value2 === 'Seconds') {
                    data.setSeconds(data.getSeconds() - value1);
                }
                
                model[statement.output] = data;
                break;

            case 'ADD_DATES':
                var date1 = new Date(Date.parse(operand1));
                var date2 = new Date(Date.parse(operand2));

                var result = new Date();
                result.setFullYear(
                    date1.getFullYear() + date2.getFullYear(),
                    date1.getMonth() + date2.getMonth(),
                    date1.getDay() + date2.getDay()
                );

                result.setHours(
                    result.getHours() + date1.getHours() + date2.getHours(),
                    result.getMinutes() + date1.getMinutes() + date2.getMinutes(),
                    result.getSeconds() + date1.getSeconds() + date2.getSeconds()
                );

                model[statement.output] = result;
                break;

            case 'SUBTRACT_DATES':
                var date1 = new Date(Date.parse(operand1));
                var date2 = new Date(Date.parse(operand2));
                
                var result = new Date();
                result.setFullYear(
                    date1.getFullYear() - date2.getFullYear(),
                    date1.getMonth() - date2.getMonth(),
                    date1.getDay() - date2.getDay()
                );
                
                result.setHours(
                    result.getHours() - date1.getHours() + date2.getHours(),
                    result.getMinutes() - date1.getMinutes() + date2.getMinutes(),
                    result.getSeconds() - date1.getSeconds() + date2.getSeconds()
                );
                
                model[statement.output] = result;
                break;

            // converts the date into the GMT/UTC (Coordinated Universal Time) date time format
            case 'TO_UTC_FORMAT':
                var ms = Date.parse(operand);
                
                model[statement.output] = new Date(ms).toUTCString();
                break;

            // converts the date into the local date time format
            // can pass an optional `locale` to convert into specific format
            case 'TO_LOCAL_FORMAT':
                var ms = Date.parse(operand);
                
                if (typeof locale === 'undefined') {
                    model[statement.output] = new Date(ms);
                } else {
                    model[statement.output] = moment(ms).format(locale);
                }
                break;
        }
        return null;
    }
};