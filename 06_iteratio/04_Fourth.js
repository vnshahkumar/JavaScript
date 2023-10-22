const MyObject1={
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
    Ja:'java',
    py:'Python',
    swift:'Swift by Apple'
}
for (const key in MyObject1) {
    // console.log(key);
    // console.log(MyObject1[key]);
    // console.log(`${key} shortcut is for ${MyObject1[key]}`);
}


//Forin loop on Array
const Arra=["Avinash","Ashish","Satish"];
for (const key in Arra) {
    //  console.log(`${key} This is index number and name  ${Arra[key]}`)
}



//forEach loop 
const coding=["js","java","ruby","python","cpp"];
// coding.forEach( function (item){
//     console.log(item);
// })




// coding.forEach((item)=>{
//     console.log(item);
// })



// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);


coding.forEach((item ,index,arra)=>{
    // console.log(item,index,arra);
})



const mycoding=[{
    languageName:"Javascript",
    languageFileName:"js"
},
{

    languageName:"java",
    languageFileName:"java"
},
{
    languageName:"Python",
    languageFileName:"Py"
}
]
mycoding.forEach((item)=>{
    console.log(item);
})

