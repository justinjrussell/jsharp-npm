var Exception = require("./Exception");

function OperationCanceledException() {
    this.callerName = OperationCanceledException.name;
    Exception.apply(this,arguments);
}

OperationCanceledException.prototype = Object.create(Exception.prototype);
OperationCanceledException.prototype.constructor = OperationCanceledException;

module.exports = OperationCanceledException;