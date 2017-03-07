var Exception = require("./Exception");

function ApplicationException() {
    this.callerName = ApplicationException.name;
    Exception.apply(this,arguments);
}

ApplicationException.prototype = Object.create(Exception.prototype);
ApplicationException.prototype.constructor = ApplicationException;

module.exports = ApplicationException;