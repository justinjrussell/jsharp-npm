var Exception = require("./Exception");

function MissingMethodException() {
    this.callerName = MissingMethodException.name;
    Exception.apply(this,arguments);
}

MissingMethodException.prototype = Object.create(Exception.prototype);
MissingMethodException.prototype.constructor = MissingMethodException;

module.exports = MissingMethodException;