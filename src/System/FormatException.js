var Exception = require("./Exception");

function FormatException() {
    this.callerName = FormatException.name;
    Exception.apply(this,arguments);
}

FormatException.prototype = Object.create(Exception.prototype);
FormatException.prototype.constructor = FormatException;

module.exports = FormatException;