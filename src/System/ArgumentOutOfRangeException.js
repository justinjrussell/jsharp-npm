var Exception = require("./Exception");

function ArgumentOutOfRangeException() {
    this.callerName = ArgumentOutOfRangeException.name;
    Exception.apply(this,arguments);
}

ArgumentOutOfRangeException.prototype = Object.create(Exception.prototype);
ArgumentOutOfRangeException.prototype.constructor = ArgumentOutOfRangeException;

module.exports = ArgumentOutOfRangeException;