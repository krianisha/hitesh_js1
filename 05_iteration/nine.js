const myNums = [1, 2, 3]

// const ans=myNums.reduce((acc,currentval)=>{
//     console.log(`${acc} ${currentval}`)
//     return acc+currentval;
// },0)
// console.log(ans);

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>{
        return acc+item.price;
},0)

console.log(priceToPay);