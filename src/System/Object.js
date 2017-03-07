function _Object(){
    this.Equals = function Equals(){};
    this.Finalize = function Finalize(){};
    this.GetHashCode = function GetHashCode(){};
    this.GetType = function GetType(){};
    this.MemberwiseClone = function MemberwiseClone(){};
    this.ReferenceEquals = function ReferenceEquals(){};
    this.ToString = function ToString(){ return this.toString(); };
    
    return this;
};

module.exports = _Object;