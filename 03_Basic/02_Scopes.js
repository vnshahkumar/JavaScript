let a=10;
// const b=20;
// var c=30;
if(true){
    let a=100;
    const b=200;
    var c=300;
    // console.log("Inner :",a);
}
// console.log("Outer :",a);
// console.log(b);
// console.log(c);


// ******************************************/
function one(){
    const username="Avinash"


    function two(){
        const website="Youtube"
        // console.log(website);
    }
    two();
    // console.log(username);
}
one();



// *******************************************************/


if(true){
    const username="Avinash"
    if(username==="Avinash"){
        const website="Youtube"
        // console.log(website);
        // console.log(username + website);
    }
    // console.log(username);
}



// **************************//
console.log(addone(5));//it will not throw errors 
function addone(num){
    return num+1;
}

// console.log(addtwo(5));//it will be throw error
const addtwo=function(num){
    return num+2;
}
console.log(addtwo(5));//it will not throw errors 