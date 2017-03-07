var Exception = require("./Exception");

function UnauthorizedAccessException() {
    this.callerName = UnauthorizedAccessException.name;
    Exception.apply(this,arguments);
}

UnauthorizedAccessException.prototype = Object.create(Exception.prototype);
UnauthorizedAccessException.prototype.constructor = UnauthorizedAccessException;

module.exports = UnauthorizedAccessException;