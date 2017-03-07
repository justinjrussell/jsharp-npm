//module.exports = require("./src/System");

var System = require("./src/System");

try {
    // var isTrue = new System.Boolean();
    // console.log(isTrue);
    // console.log(isTrue instanceof Boolean);
    
    //throw new System.Exception("It Worked!");
    throw new System.AccessViolationException("It Worked Again!");
    //throw new Error("Its working!");
}
catch(ex) {
    console.log(ex.Message);
    console.log(ex.StackTrace);
    console.log(ex instanceof System.AccessViolationException);
    console.log(ex instanceof System.Exception);
    console.log(ex instanceof System.Object);
}
