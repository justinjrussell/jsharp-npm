var Exception = require("./Exception");

function InsufficientMemoryException() {
    this.callerName = InsufficientMemoryException.name;
    Exception.apply(this,arguments);
}

InsufficientMemoryException.prototype = Object.create(Exception.prototype);
InsufficientMemoryException.prototype.constructor = InsufficientMemoryException;

module.exports = InsufficientMemoryException;