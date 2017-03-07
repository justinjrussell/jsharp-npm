var Exception = require("./Exception");

function TypeLoadException() {
    this.callerName = TypeLoadException.name;
    Exception.apply(this,arguments);
}

TypeLoadException.prototype = Object.create(Exception.prototype);
TypeLoadException.prototype.constructor = TypeLoadException;

module.exports = TypeLoadException;