const os=require("os");
console.log(os.totalmem());
const rdata = require("./script");
console.log(rdata.data); 
rdata.testModule();