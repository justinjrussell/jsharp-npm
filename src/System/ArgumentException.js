var Exception = require("./Exception");

function ArgumentException() {
    this.callerName = ArgumentException.name;
    Exception.apply(this,arguments);
}

ArgumentException.prototype = Object.create(Exception.prototype);
ArgumentException.prototype.constructor = ArgumentException;

module.exports = ArgumentException;