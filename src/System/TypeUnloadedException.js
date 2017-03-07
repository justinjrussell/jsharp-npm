var Exception = require("./Exception");

function TypeUnloadedException() {
    this.callerName = TypeUnloadedException.name;
    Exception.apply(this,arguments);
}

TypeUnloadedException.prototype = Object.create(Exception.prototype);
TypeUnloadedException.prototype.constructor = TypeUnloadedException;

module.exports = TypeUnloadedException;