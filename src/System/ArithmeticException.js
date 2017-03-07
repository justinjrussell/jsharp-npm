var Exception = require("./Exception");

function ArithmeticException() {
    this.callerName = ArithmeticException.name;
    Exception.apply(this,arguments);
}

ArithmeticException.prototype = Object.create(Exception.prototype);
ArithmeticException.prototype.constructor = ArithmeticException;

module.exports = ArithmeticException;