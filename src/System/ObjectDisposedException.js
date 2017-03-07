var Exception = require("./Exception");

function ObjectDisposedException() {
    this.callerName = ObjectDisposedException.name;
    Exception.apply(this,arguments);
}

ObjectDisposedException.prototype = Object.create(Exception.prototype);
ObjectDisposedException.prototype.constructor = ObjectDisposedException;

module.exports = ObjectDisposedException;