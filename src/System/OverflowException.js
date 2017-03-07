var Exception = require("./Exception");

function OverflowException() {
    this.callerName = OverflowException.name;
    Exception.apply(this,arguments);
}

OverflowException.prototype = Object.create(Exception.prototype);
OverflowException.prototype.constructor = OverflowException;

module.exports = OverflowException;