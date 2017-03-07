var Exception = require("./Exception");

function PlatformNotSupportedException() {
    this.callerName = PlatformNotSupportedException.name;
    Exception.apply(this,arguments);
}

PlatformNotSupportedException.prototype = Object.create(Exception.prototype);
PlatformNotSupportedException.prototype.constructor = PlatformNotSupportedException;

module.exports = PlatformNotSupportedException;