var Exception = require("./Exception");

function TypeInitializationException() {
    this.callerName = TypeInitializationException.name;
    Exception.apply(this,arguments);
}

TypeInitializationException.prototype = Object.create(Exception.prototype);
TypeInitializationException.prototype.constructor = TypeInitializationException;

module.exports = TypeInitializationException;