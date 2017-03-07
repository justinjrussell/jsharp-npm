var Exception = require("./Exception");

function NotImplementedException() {
    this.callerName = NotImplementedException.name;
    Exception.apply(this,arguments);
}

NotImplementedException.prototype = Object.create(Exception.prototype);
NotImplementedException.prototype.constructor = NotImplementedException;

module.exports = NotImplementedException;