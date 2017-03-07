var Exception = require("./Exception");

function SystemException() {
    this.callerName = SystemException.name;
    Exception.apply(this,arguments);
}

SystemException.prototype = Object.create(Exception.prototype);
SystemException.prototype.constructor = SystemException;

module.exports = SystemException;