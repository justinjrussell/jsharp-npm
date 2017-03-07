var Exception = require("./Exception");

function TimeZoneNotFoundException() {
    this.callerName = TimeZoneNotFoundException.name;
    Exception.apply(this,arguments);
}

TimeZoneNotFoundException.prototype = Object.create(Exception.prototype);
TimeZoneNotFoundException.prototype.constructor = TimeZoneNotFoundException;

module.exports = TimeZoneNotFoundException;