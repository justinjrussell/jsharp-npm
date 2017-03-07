var Exception = require("./Exception");

function TypeAccessException() {
    this.callerName = TypeAccessException.name;
    Exception.apply(this,arguments);
}

TypeAccessException.prototype = Object.create(Exception.prototype);
TypeAccessException.prototype.constructor = TypeAccessException;

module.exports = TypeAccessException;