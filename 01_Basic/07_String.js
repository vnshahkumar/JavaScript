const FirstName="Avinash";
const LastName="Kumar";
let age=22;
// console.log(FirstName+ LastName +  age );//bad habits 

console.log(`Hello my name is ${FirstName} ${LastName} and my age is ${age}`);


const gameName=new String('Avinash Kumar');

// console.log(gameName[0]);//A
// console.log(gameName.__proto__);//{}
// console.log(gameName.toUpperCase());//AVINASH KUMAR
// console.log(gameName.toLowerCase());//avinash kumar
// console.log(gameName.length);//13
// console.log(gameName.split());//['Avinash Kumar']
// console.log(gameName.charAt(4));//a
// console.log(gameName.indexOf(5));//-1
// console.log(gameName.indexOf('s'));//5


const newString=gameName.substring(0,5)
console.log(newString);//Avina

const anothweString=gameName.slice(0,8);
console.log(anothweString);//Avinash 

const newStringOne="      Avinash      ";
console.log(newStringOne);//      Avinash
console.log(newStringOne.trim());//Avinash


const url="https://hitesh.com/hitesh%20kumaryadav";
console.log(url.replace('%20','='));

 