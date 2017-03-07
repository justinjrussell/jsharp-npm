var Exception = require("./Exception");

function InvalidCastException() {
    this.callerName = InvalidCastException.name;
    Exception.apply(this,arguments);
}

InvalidCastException.prototype = Object.create(Exception.prototype);
InvalidCastException.prototype.constructor = InvalidCastException;

module.exports = InvalidCastException;