var Exception = require("./Exception");

function ArrayTypeMismatchException() {
    this.callerName = ArrayTypeMismatchException.name;
    Exception.apply(this,arguments);
}

ArrayTypeMismatchException.prototype = Object.create(Exception.prototype);
ArrayTypeMismatchException.prototype.constructor = ArrayTypeMismatchException;

module.exports = ArrayTypeMismatchException;