//for of

//["","",""]<--string 
//[{},{},{}]<--object 

//Array using forof loop
const arr=[1,2,3,4,5,6,7,8,9];
for (const i of arr) {
    // console.log(i);
}


//Array string 
const str=["Banana","tomato","potato","onions"];
for (const i of str) {
    // console.log(`Item names is ${i}`);
}



//Slice each Character 
const name="Avinash kumar";

for (const i of name) {
    if(i==" "){
        continue;
    }
    // console.log(`Each Character is ${i }`);
}


//map
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('PAK',"Pakistan")
map.set('BO',"Books")
map.set('ID',"Cards")
map.set('IN',"India")
// console.log(map);
for (const [key,value] of map) {
    // console.log(key);
    // console.log(key,':-',value);
}








//It is not working because object is not iteratble
const Myobject={
    'Game':"NFS",
    'Game1':"Pbji",
    'Game2':"Free Wire",
    'Game3':"Lido"
}
for (const [key,value] of Myobject) {
    console.log(key,':',value);
    
}
