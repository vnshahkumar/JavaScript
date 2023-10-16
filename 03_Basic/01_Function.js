function myName(){//function decleration
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("H");
}
// myName();//function call



//function of add two number
function addTwoNumber(number1,number2){
    console.log(number1+number2);
}
// addTwoNumber(12,20);//call add  funcion(32)




//functionString of add two number
function addNumberString(number1,number2){
    console.log(number1+number2);
}
// addNumberString(12,"4");//call add  funcion(124)


//******************************************************************************** */











//function who is not returning aneything
function add(num1,num2){
    // console.log(num1+num2);//25
}
const result=add(12,13);
// console.log(result);//undefined 






//********************************************************************************** */




//function who is returning something 
function addition(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2;
}
const result1=addition(12,14);
// console.log(result1);




// **********************************************************************/
function loggedUser(UserName){
    return `${UserName} Just Logged in`;
}
// const result2=loggedUser("Avinash");//Avinash Just Logged in
// const result2=loggedUser("");//Just Logged in
// const result2=loggedUser();//undefined Just Logged in
// console.log(result2);function call



// *********************************************************/
function loggedUser(UserName){
    // if(UserName===undefined){
        if(!UserName){
        // console.log("Please Enter Your Name.");
        return;
    }
    return `${UserName} Just Logged in`;
}
// const result4=loggedUser("Avinash");
const result4=loggedUser();
// console.log(result4);

// *******************************/

function loggedUser(UserName="Avinash"){
    if(!UserName){
        // console.log("Please Enter Your Name.");
        return;
    }
    return `${UserName} Just Logged in`;
}
//call with enter value
const result42=loggedUser("Ashish");
// console.log(result42);

//call without enter anyvalue 
const result5=loggedUser();
// console.log(result5);



// ****************************************************************/
//function with rest Operater
function addnumber(val1,val2,...number){
    return number;
}
const res=addnumber(200,100,3000,4000,10000,60000);
// console.log(res);









// ***********************************************************************/
//how to access object inside using function 
const User={//create object 
    name:"Avinash",
    price:399
}
function handleObject(anyUser){//create function 
    // console.log(`UserName is ${anyUser.name} and price is ${anyUser.price}`);//print 
}
//handleObject(User);call function
//manage object calling time the function
handleObject({
    name:"Ashish kumar",
    price:499
});





// ********************************************************************/
//create Array using function
const newArray=[10,20,30,40,50,60,70,80,90,100,110,120,130];
function handleArray(GetArray){
    return GetArray[0];
}
const resu=handleArray(newArray);
console.log(resu);
const resu1=handleArray([100,200,300,400,500,600,700,800,900,1000,1100]);
console.log(resu1);
