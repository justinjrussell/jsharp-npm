var Exception = require("./Exception");

function MemberAccessException() {
    this.callerName = MemberAccessException.name;
    Exception.apply(this,arguments);
}

MemberAccessException.prototype = Object.create(Exception.prototype);
MemberAccessException.prototype.constructor = MemberAccessException;

module.exports = MemberAccessException;