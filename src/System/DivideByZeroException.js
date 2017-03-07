var Exception = require("./Exception");

function DivideByZeroException() {
    this.callerName = DivideByZeroException.name;
    Exception.apply(this,arguments);
}

DivideByZeroException.prototype = Object.create(Exception.prototype);
DivideByZeroException.prototype.constructor = DivideByZeroException;

module.exports = DivideByZeroException;