var Exception = require("./Exception");

function InvalidTimeZoneException() {
    this.callerName = InvalidTimeZoneException.name;
    Exception.apply(this,arguments);
}

InvalidTimeZoneException.prototype = Object.create(Exception.prototype);
InvalidTimeZoneException.prototype.constructor = InvalidTimeZoneException;

module.exports = InvalidTimeZoneException;