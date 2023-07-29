const os=require("os");
console.log(os.totalmem());
console.log(os.freemem());
const rdata = require("./script");
console.log(rdata.data); 
rdata.testModule();