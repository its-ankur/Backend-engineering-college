const fs=require('fs');
// let contents=fs.readFileSync("./script1.js","utf-8");
// console.log("Reading...");
// console.log(contents);

// fs.readFile("./script1.js","utf-8",(error,data)=>{
//     if(error){
//         throw error;
//     }
//     //console.log("Reading...");
//     console.log(data);
//     console.log("Completed");
// });
// console.log("Reading...");

// fs.writeFileSync("./data.txt","Hello World","utf-8");


function search(path){
    fs.readdir(path,(error,files)=>{
        if(!error){
            files.forEach((item)=>{
                console.log(path+"/"+item)
                search(path+"/"+item);
            });
        }
    });
}
search("./");