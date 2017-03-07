var Exception = require("./Exception");

function NotFiniteNumberException() {
    this.callerName = NotFiniteNumberException.name;
    Exception.apply(this,arguments);
}

NotFiniteNumberException.prototype = Object.create(Exception.prototype);
NotFiniteNumberException.prototype.constructor = NotFiniteNumberException;

module.exports = NotFiniteNumberException;