var Exception = require("./Exception");

function NullReferenceException() {
    this.callerName = NullReferenceException.name;
    Exception.apply(this,arguments);
}

NullReferenceException.prototype = Object.create(Exception.prototype);
NullReferenceException.prototype.constructor = NullReferenceException;

module.exports = NullReferenceException;