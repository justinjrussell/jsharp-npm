var Exception = require("./Exception");

function TimeoutException() {
    this.callerName = TimeoutException.name;
    Exception.apply(this,arguments);
}

TimeoutException.prototype = Object.create(Exception.prototype);
TimeoutException.prototype.constructor = TimeoutException;

module.exports = TimeoutException;