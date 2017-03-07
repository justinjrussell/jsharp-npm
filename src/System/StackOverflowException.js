var Exception = require("./Exception");

function StackOverflowException() {
    this.callerName = StackOverflowException.name;
    Exception.apply(this,arguments);
}

StackOverflowException.prototype = Object.create(Exception.prototype);
StackOverflowException.prototype.constructor = StackOverflowException;

module.exports = StackOverflowException;