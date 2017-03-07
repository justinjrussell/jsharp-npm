var Exception = require("./Exception");

function UriTemplateMatchException() {
    this.callerName = UriTemplateMatchException.name;
    Exception.apply(this,arguments);
}

UriTemplateMatchException.prototype = Object.create(Exception.prototype);
UriTemplateMatchException.prototype.constructor = UriTemplateMatchException;

module.exports = UriTemplateMatchException;