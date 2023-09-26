const EventEmitter=require("events");  //Reference to class


let obj=new EventEmitter();  //object of class

obj.on("Login",(e)=>{
    console.log("Login event fired");
    console.log(e);
});
obj.on("Logout",(e)=>{
    console.log("Logout event fired");
    console.log(e);
});
obj.emit("Login","test");  //fire event
obj.emit("Logout",{name:"Ankur",section:"a"});  //fire event 