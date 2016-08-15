module.exports = function () {
    var api = {
        execute: execute
    };
    return api;

    function execute(statement, model) {
        var string1, string2, string3, index, length, count;

        if(statement.stringStatement.string1) {
            string1 = model[statement.stringStatement.string1.variable];
            if(typeof string1 === 'undefined') {
                string1 = statement.stringStatement.string1.literal;
            }
        }
        if(statement.stringStatement.string2) {
            string2 = model[statement.stringStatement.string2.variable];
            if(typeof string2 === 'undefined') {
                string2 = statement.stringStatement.string2.literal;
            }
        }
        if(statement.stringStatement.string3) {
            string3 = model[statement.stringStatement.string3.variable];
            if(typeof string3 === 'undefined') {
                string3 = statement.stringStatement.string3.literal;
            }
        }
        if(statement.stringStatement.index) {
            index = model[statement.stringStatement.index.variable];
            if(typeof index === 'undefined') {
                index = statement.stringStatement.index.literal;
            }
        }
        if(statement.stringStatement.length) {
            length = model[statement.stringStatement.length.variable];
            if(typeof length === 'undefined') {
                length = statement.stringStatement.length.literal;
            }
        }
        if(statement.stringStatement.count) {
            count = model[statement.stringStatement.count.variable];
            if(typeof count === 'undefined') {
                count = statement.stringStatement.count.literal;
            }
        }
        switch (statement.stringStatement.operation) {
            case 'VARIABLE' :
                break;
            case 'CONCATENATE' :
                model[statement.output] = string1 + string2;
                break;
            case 'SUBSTRING' :
                model[statement.output] = string1.substring(index,length);
                break;
            case 'SUBSTR' :
                model[statement.output] = string1.substr(index,length);
                break;
            case 'LENGTH' :
                model[statement.output] = string1.length;
                break;
            case 'INCLUDES' :
                model[statement.output] = string1.includes(string2);
                break;
            case 'INDEXOF'  :
                model[statement.output] = string1.indexOf(string2);
                break;
            case 'CHARAT'   :
                model[statement.output] = string1.charAt(index);
                break;
            case 'CHARCODEAT'   :
                model[statement.output] = string1.charCodeAt(index);
                break;
            case 'LASTINDEXOF' :
                model[statement.output] = string1.lastIndexOf(string2);
                break;
            case 'SEARCH'   :
                model[statement.output] = string1.search(string2);
                break;
            case 'REPEAT'   :
                model[statement.output] = string1.repeat(count);
                break;
            case 'REPLACE'  :
                model[statement.output] = string1.replace(string2,string3);
                break;
            case 'REPLACEALL'  :
                var regexopr = new RegExp(string2,'g');
                model[statement.output] = string1.replace(regexopr,string3);
                break;
            case 'SLICE'    :
                model[statement.output] = string1.slice(index,length);
                break;
            case 'LOWERCASE':
                model[statement.output] = string1.toLowerCase();
                break;
            case 'LOCALELOWERCASE':
                model[statement.output] = string1.toLowerCase();
                break;
            case 'UPPERCASE':
                model[statement.output] = string1.toUpperCase();
                break;
            case 'LOCALEUPPERCASE':
                model[statement.output] = string1.toUpperCase();
                break;
            case 'TRIM'     :
                model[statement.output] = string1.trim();
                break;
            case 'LOCALECOMPARE':
                model[statement.output] = string1.localeCompare(string2);
                break;
            case 'MATCH':
                var regexopr = new RegExp(string2,'g');
                model[statement.output] = string1.match(regexopr);
                break;
            case 'SPLIT':
                model[statement.output] = string1.split(string2);
                break;
            case 'STARTSWITH':
                model[statement.output] = string1.startsWith(string2);
                break;
            case 'ENDSWITH':
                model[statement.output] = string1.endsWith(string2);
                break;
            case 'VALUEOF':
                model[statement.output] = string1.valueOf();
                break;
        }
        return null;
    }
};
