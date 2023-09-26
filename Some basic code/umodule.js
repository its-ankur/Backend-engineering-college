// const EventEmitter = require('events');
// const event = new EventEmitter();
// event.on("Done",()=>{
//     console.log("Done event fired");
// });

// const log=require("./emodule");
// log();


// const obj=require("./emodule");
// obj.event.on("Done",()=>{
//     console.log("Done event fired");
// });
// obj.log();

const Logger=require("./emodule");
let obj=new Logger();
obj.on("Done",()=>{
    console.log("Done handler");
});

obj.log();
//https://github.com/baljeetmatta/BATCHA

