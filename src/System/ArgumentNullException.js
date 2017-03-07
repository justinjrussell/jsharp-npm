var Exception = require("./Exception");

function ArgumentNullException() {
    this.callerName = ArgumentNullException.name;
    Exception.apply(this,arguments);
}

ArgumentNullException.prototype = Object.create(Exception.prototype);
ArgumentNullException.prototype.constructor = ArgumentNullException;

module.exports = ArgumentNullException;