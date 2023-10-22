//forEach not return value
const coding=["js","java","python","cpp","C","Node.js"];
const value=coding.forEach((item)=>{
    // console.log(item);
    return item;
})
// console.log(value)




//filter return 
const mynum=[1,2,3,4,5,6,7,8,9];
// let newNum=mynum.filter((num)=>num>4);
const newNum=mynum.filter((num)=>{
    return num;
})
// console.log(newNum);




const newNums=[];
mynum.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
})
// console.log(newNums);




const books=[
    {title:'Book one',genre:'Fiction',publish:1981,wdition:'2004'},
    {title:'book Two',genre:'Non-Fiction',publish:1992,edition:'2008'},
    {title:'Book Three',genre:'History',publish:1999,edition:2007},
    {title:'Book Four',genre:'Non-Science',publish:2000,edition:2010},
    {title:'Book Five',genre:'Fiction',publish:2009,edition:2014},
    {title:'Book six',genre:'History',publish:2010,edition:1996},
    {title:'Book Seven',genre:'Science',publish:1981,edition:2016},
    {title:'Book Eight',genre:'Non-Fiction',publish:1983,edition:1989},
    {title:'Book Nine',genre:'Non-Fiction',publish:2000,edition:2003},
    {title:'Books Ten',genre:'History',publish:2000,edition:2005}
];
// const userBooks=books.filter((bk)=>bk.genre==='History');
// const userBooks=books.filter((bk)=>bk.publish==2000);
const userBooks=books.filter((bk)=>{
    // return bk.publish>=1998;
    return bk.publish>=1995 && bk.genre==='History';
})
console.log(userBooks);