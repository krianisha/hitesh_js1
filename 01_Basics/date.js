let myd=new Date();
console.log(myd) //object
console.log(myd.toDateString()) //try more convertion way using .
//convert date in seconds;
console.log(Math.floor(Date.now()/1000)) //interview question 

//customize date
myd.toLocaleDateString('default'.{
    weekday:"long",
})