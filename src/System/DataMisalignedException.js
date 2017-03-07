var Exception = require("./Exception");

function DataMisalignedException() {
    this.callerName = DataMisalignedException.name;
    Exception.apply(this,arguments);
}

DataMisalignedException.prototype = Object.create(Exception.prototype);
DataMisalignedException.prototype.constructor = DataMisalignedException;

module.exports = DataMisalignedException;