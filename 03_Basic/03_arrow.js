const user={
    username:"Avinash",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}
// user.welcomeMessage();
// user.username="Ashish";
// user.welcomeMessage();
// console.log(this);

// console.log(this)



function one(){
    let username="Avinash Kumar"
    console.log(this);
}
// one();


const one1=function(){
    let username="Avinash kumar"
    console.log(this.username);
    console.log(this);
}
// one1();


const one2=()=>{
    let username="Avinash kumar"
    console.log(this.username);
    console.log(this);
}
// one2();



/*
const addtwo=(num,num1)=>{
    return num+num1;
}*/
// const addtwo=(num1,num2)=> num1+num2;
// const addtwo=(num1,num2)=> (num1+num2);

const addtwo=(num1,num2)=>({username:"Avinash"});

console.log(addtwo(3,4));



   






