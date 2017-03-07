function _Boolean() {
    this.CompareTo = function(){};
    this.GetTypeCode = function(){};
}

_Boolean.prototype = Object.create(Boolean.prototype);
_Boolean.prototype.constructor = _Boolean;

_Boolean.Parse = function(value){};
_Boolean.TryParse = function(value,output){};

module.exports = _Boolean;