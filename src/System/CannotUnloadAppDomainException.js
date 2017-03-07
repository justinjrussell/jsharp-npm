var Exception = require("./Exception");

function CannotUnloadAppDomainException() {
    this.callerName = CannotUnloadAppDomainException.name;
    Exception.apply(this,arguments);
}

CannotUnloadAppDomainException.prototype = Object.create(Exception.prototype);
CannotUnloadAppDomainException.prototype.constructor = CannotUnloadAppDomainException;

module.exports = CannotUnloadAppDomainException;