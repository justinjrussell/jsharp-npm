var Exception = require("./Exception");

function DuplicateWaitObjectException() {
    this.callerName = DuplicateWaitObjectException.name;
    Exception.apply(this,arguments);
}

DuplicateWaitObjectException.prototype = Object.create(Exception.prototype);
DuplicateWaitObjectException.prototype.constructor = DuplicateWaitObjectException;

module.exports = DuplicateWaitObjectException;