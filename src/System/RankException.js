var Exception = require("./Exception");

function RankException() {
    this.callerName = RankException.name;
    Exception.apply(this,arguments);
}

RankException.prototype = Object.create(Exception.prototype);
RankException.prototype.constructor = RankException;

module.exports = RankException;