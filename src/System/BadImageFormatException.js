var Exception = require("./Exception");

function BadImageFormatException() {
    this.callerName = BadImageFormatException.name;
    Exception.apply(this,arguments);
}

BadImageFormatException.prototype = Object.create(Exception.prototype);
BadImageFormatException.prototype.constructor = BadImageFormatException;

module.exports = BadImageFormatException;