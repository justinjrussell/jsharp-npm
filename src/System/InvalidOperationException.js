var Exception = require("./Exception");

function InvalidOperationException() {
    this.callerName = InvalidOperationException.name;
    Exception.apply(this,arguments);
}

InvalidOperationException.prototype = Object.create(Exception.prototype);
InvalidOperationException.prototype.constructor = InvalidOperationException;

module.exports = InvalidOperationException;