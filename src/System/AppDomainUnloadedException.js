var Exception = require("./Exception");

function AppDomainUnloadedException() {
    this.callerName = AppDomainUnloadedException.name;
    Exception.apply(this,arguments);
}

AppDomainUnloadedException.prototype = Object.create(Exception.prototype);
AppDomainUnloadedException.prototype.constructor = AppDomainUnloadedException;

module.exports =  AppDomainUnloadedException;