// const EventEmitter=require("events");  //Reference to class
// const event=new EventEmitter();  //object of class
// function log(){
//     console.log("Login event fired");
//     event.emit("Done");
// }

// module.exports.log=log;
// module.exports.event=event;

const EventEmitter=require("events");  //Reference to class

class Logger extends EventEmitter{
    log(){
        console.log("Login event fired");
        this.emit("Done");
    }
}

module.exports=Logger;