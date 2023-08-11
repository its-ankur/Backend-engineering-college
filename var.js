// for(var i=0;i<3;i++){
// setTimeout(function(){
//         console.log(i);
// },5000);
// }



function fun(){
    var a=10;
    return function(){
        console.log(a);
    }
}

let k=fun();
k();