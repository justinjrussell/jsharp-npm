var Exception = require("./Exception");

function AccessViolationException(){
    this.callerName = AccessViolationException.name;
    Exception.apply(this,arguments);
}

AccessViolationException.prototype = Object.create(Exception.prototype);
AccessViolationException.prototype.constructor = AccessViolationException;

module.exports = AccessViolationException;

