var Exception = require("./Exception");

function MethodAccessException() {
    this.callerName = MethodAccessException.name;
    Exception.apply(this,arguments);
}

MethodAccessException.prototype = Object.create(Exception.prototype);
MethodAccessException.prototype.constructor = MethodAccessException;

module.exports = MethodAccessException;