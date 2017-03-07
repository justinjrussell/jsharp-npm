var Exception = require("./Exception");

function IndexOutOfRangeException() {
    this.callerName = IndexOutOfRangeException.name;
    Exception.apply(this,arguments);
}

IndexOutOfRangeException.prototype = Object.create(Exception.prototype);
IndexOutOfRangeException.prototype.constructor = IndexOutOfRangeException;

module.exports = IndexOutOfRangeException;