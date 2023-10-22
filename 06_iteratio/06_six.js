const myNumbers=[1,2,3,4,5,6,7,8,9,10];
const newNum=myNumbers.map((num)=>num+10);
// console.log(newNum);


const newNum1=myNumbers.map((num)=>{
    return num+20;
})
// console.log(newNum1);


const newNum2=myNumbers
                       .map((num)=>num*10)
                       .map((num)=>num+1)
                       .filter((num)=>num>=40);
                    //    console.log(newNum2);







const myNums=[1,2,3,4,5,6,7,8];
const myTotal=myNums.reduce(function (acc,currval){
    // console.log(`acc: ${acc} and currval: ${currval}`);
    // return acc+currval},0);
    return acc+currval},3);
    // console.log(myTotal);



const myTotal1=myNums.reduce((acc,currval)=>acc+currval,0);
// console.log(myTotal)


const shoppingCart=[
    {
    itemName:"js course",
    price:2999
},
{
    itemName:"py course",
    price:999
},
{
    itemName:"mobile dev course",
    price:3999
},
{
    itemName:"cpp",
    price:1999
},
{
    itemName:"Web development",
    price:3999
},
{
    itemName:"DSA",
    price:2999
}
];
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(priceToPay);
