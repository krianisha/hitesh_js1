// const myarr=[1,2,3,4];
// myarr.push(2);
// myarr.pop();
// myarr.unshift(3) //add in first
// myarr.shift() //remove first;
// const newarr=myarr.join();
// console.log(myarr); //it typeof is object
// console.log(typeof myarr);
// console.log(newarr); // it typeof is string

// //slice splice
// const  myn1=myarr.slice(1,3);  // 1 index kam print and original me change ni hota
// console.log(myn1);
// const myn2=myarr.splice(1,3) //originale arary ko manipulate and 1 index jada print
// console.log(myn2);



const heroes = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// heroes.push(dc);  // This would add the dc array as a single element in heroes.
// console.log(heroes);

// const allh = heroes.concat(dc);  // This combines both arrays.
// console.log(allh);

// push modifies the existing array, while concat returns a new array.

const allnew = [...heroes, ...dc];  // Spread syntax to combine arrays.
console.log(allnew);

const another = [1, 2, 3, 4, [12, 34, 5], 1, 2, [23, 44]];
const realanother = another.flat(Infinity);  // Flattening the array completely.
console.log(realanother);


console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"}))  //interesting where key will treat as empty array if key ko kese tret krna h wo definedd na ho

//convert to array
let a=100
let b=200
let c=577
console.log(Array.of(a,b,c));
