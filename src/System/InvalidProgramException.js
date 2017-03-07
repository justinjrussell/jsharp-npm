var Exception = require("./Exception");

function InvalidProgramException() {
    this.callerName = InvalidProgramException.name;
    Exception.apply(this,arguments);
}

InvalidProgramException.prototype = Object.create(Exception.prototype);
InvalidProgramException.prototype.constructor = InvalidProgramException;

module.exports = InvalidProgramException;