var Exception = require("./Exception");

function AggregateException() {
    this.callerName = AggregateException.name;
    Exception.apply(this,arguments);
}

AggregateException.prototype = Object.create(Exception.prototype);
AggregateException.prototype.constructor = AggregateException;

module.exports = AggregateException;