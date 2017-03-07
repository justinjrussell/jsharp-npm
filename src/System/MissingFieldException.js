var Exception = require("./Exception");

function MissingFieldException() {
    this.callerName = MissingFieldException.name;
    Exception.apply(this,arguments);
}

MissingFieldException.prototype = Object.create(Exception.prototype);
MissingFieldException.prototype.constructor = MissingFieldException;

module.exports = MissingFieldException;