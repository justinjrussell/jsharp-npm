var Exception = require("./Exception");

function DllNotFoundException() {
    this.callerName = DllNotFoundException.name;
    Exception.apply(this,arguments);
}

DllNotFoundException.prototype = Object.create(Exception.prototype);
DllNotFoundException.prototype.constructor = DllNotFoundException;

module.exports = DllNotFoundException;