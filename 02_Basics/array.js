const myarr=[1,2,3,4];
myarr.push(2);
myarr.pop();
myarr.unshift(3) //add in first
myarr.shift() //remove first;
const newarr=myarr.join();
console.log(myarr); //it typeof is object
console.log(typeof myarr);
console.log(newarr); // it typeof is string

//slice splice
const  myn1=myarr.slice(1,3);  // 1 index kam print and original me change ni hota
console.log(myn1);
const myn2=myarr.splice(1,3) //originale arary ko manipulate and 1 index jada print
console.log(myn2);