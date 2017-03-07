var Exception = require("./Exception");

function MissingMemberException() {
    this.callerName = MissingMemberException.name;
    Exception.apply(this,arguments);
}

MissingMemberException.prototype = Object.create(Exception.prototype);
MissingMemberException.prototype.constructor = MissingMemberException;

module.exports = MissingMemberException;