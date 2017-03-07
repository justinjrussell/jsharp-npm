var Exception = require("./Exception");

function UriFormatException() {
    this.callerName = UriFormatException.name;
    Exception.apply(this,arguments);
}

UriFormatException.prototype = Object.create(Exception.prototype);
UriFormatException.prototype.constructor = UriFormatException;

module.exports = UriFormatException;