var Exception = require("./Exception");

function ExecutionEngineException() {
    this.callerName = ExecutionEngineException.name;
    Exception.apply(this,arguments);
}

ExecutionEngineException.prototype = Object.create(Exception.prototype);
ExecutionEngineException.prototype.constructor = ExecutionEngineException;

module.exports = ExecutionEngineException;