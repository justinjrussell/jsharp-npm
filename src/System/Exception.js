var _Object = require("./Object");

function Exception(){
    var cn = this.callerName;
    if(!cn){ cn = Exception.name; }
    _Object.apply(this);
    var temp = Error.apply(this, arguments);
    temp.name = cn;
    this.Data = {}; //IDictionary
    this.HelpLink = "";//String
    this.HResult = 0;//Int32
    this.InnerException = {};//Exception
    this.Message = temp.message;//String
    this.Source = "";//String
    this.StackTrace = temp.stack;//String
    this.TargetSite = {};//MethodBase
    delete this.callerName;
    
    return this;
}

Exception.prototype = Object.create(_Object.prototype);
Exception.prototype.constructor = Exception;

module.exports = Exception;