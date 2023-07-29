const fs = require('fs');

//create a directory

// fs.mkdir("E:\\Backend engineering college\\test",function(error){
//     if(error){
//         //console.log(error);
//         throw error;
//     }else{
//         console.log("Directory created successfully");
//     }
// });
// fs.mkdir("E:\\Backend engineering college\\test\\chitkara", { recursive: true }, function (error) {
//     if (error) {
//         //console.log(error);
//         throw error;
//     } else {
//         console.log("Directory created successfully");
//     }
// });

//remove directory

    // fs.rmdir("E:\\Backend engineering college\\test",function(error){
    //     if(error){
    //         //console.log(error);
    //         throw error;
    //     }else{
    //         console.log("Directory removed successfully");
    //     }
    // });


// Read directory


// fs.readdir("E:\\Backend engineering college",(error,data)=>{
//     if(error){
//         throw error;
//     }
//     console.log(data);
// });

//Read file

// fs.readFile("E:\\Backend engineering college\\test.txt","utf-8",(error,data)=>{
//     if(error){
//         throw error;
//     }
//     console.log(data);
// });

//Write file

// fs.writeFile("E:\\Backend engineering college\\test1.txt","New Dataex",(error)=>{
//     if(error){
//         throw error;
//     }
//     console.log("File created successfully");
// });

//Append file

// fs.appendFile("E:\\Backend engineering college\\test1.txt"," New Dataex",(error)=>{
//     if(error){
//         throw error;
//     }
//     console.log("File created successfully");
// });

//Copy file

fs.copyFile("E:\\Backend engineering college\\test.txt","E:\\Backend engineering college\\test1.txt",(error)=>{
    if(error){
        throw error;
    }
    console.log("File copied successfully");
});