var _Object = require("./Object");

function ValueType() {
    _Object.apply(this);
    
    return this;
}

ValueType.prototype = Object.create(_Object.prototype);
ValueType.prototype.constructor = ValueType;

module.exports = ValueType;