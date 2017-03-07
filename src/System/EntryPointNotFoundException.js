var Exception = require("./Exception");

function EntryPointNotFoundException() {
    this.callerName = EntryPointNotFoundException.name;
    Exception.apply(this,arguments);
}

EntryPointNotFoundException.prototype = Object.create(Exception.prototype);
EntryPointNotFoundException.prototype.constructor = EntryPointNotFoundException;

module.exports = EntryPointNotFoundException;