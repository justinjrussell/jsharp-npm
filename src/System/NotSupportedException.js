var Exception = require("./Exception");

function NotSupportedException() {
    this.callerName = NotSupportedException.name;
    Exception.apply(this,arguments);
}

NotSupportedException.prototype = Object.create(Exception.prototype);
NotSupportedException.prototype.constructor = NotSupportedException;

module.exports = NotSupportedException;