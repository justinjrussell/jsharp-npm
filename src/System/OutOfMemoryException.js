var Exception = require("./Exception");

function OutOfMemoryException() {
    this.callerName = OutOfMemoryException.name;
    Exception.apply(this,arguments);
}

OutOfMemoryException.prototype = Object.create(Exception.prototype);
OutOfMemoryException.prototype.constructor = OutOfMemoryException;

module.exports = OutOfMemoryException;