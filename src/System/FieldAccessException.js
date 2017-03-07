var Exception = require("./Exception");

function FieldAccessException() {
    this.callerName = FieldAccessException.name;
    Exception.apply(this,arguments);
}

FieldAccessException.prototype = Object.create(Exception.prototype);
FieldAccessException.prototype.constructor = FieldAccessException;

module.exports = FieldAccessException;