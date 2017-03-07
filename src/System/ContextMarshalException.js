var Exception = require("./Exception");

function ContextMarshalException() {
    this.callerName = ContextMarshalException.name;
    Exception.apply(this,arguments);
}

ContextMarshalException.prototype = Object.create(Exception.prototype);
ContextMarshalException.prototype.constructor = ContextMarshalException;

module.exports = ContextMarshalException;