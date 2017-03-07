var Exception = require("./Exception");

function MulticastNotSupportedException() {
    this.callerName = MulticastNotSupportedException.name;
    Exception.apply(this,arguments);
}

MulticastNotSupportedException.prototype = Object.create(Exception.prototype);
MulticastNotSupportedException.prototype.constructor = MulticastNotSupportedException;

module.exports = MulticastNotSupportedException;