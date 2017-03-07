var Exception = require("./Exception");

function InsufficientExecutionStackException() {
    this.callerName = InsufficientExecutionStackException.name;
    Exception.apply(this,arguments);
}

InsufficientExecutionStackException.prototype = Object.create(Exception.prototype);
InsufficientExecutionStackException.prototype.constructor = InsufficientExecutionStackException;

module.exports = InsufficientExecutionStackException;