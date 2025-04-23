
//primitive
/*
7 type of data type
String 
Boolean
Number
Bigint
Symbole
null
undefined
*/


const id1=Symbol('123');
const id2=Symbol('123');
console.log(id1);
console.log(id2);
console.log(id1==id2);   //false symbole will different foe same input also
const bigint=12345678905678967890n;

//reference (non primitive)
// array , object , function;
const names = ["ANISHA","VISHAL"];
let myboj={
    name:"Anisha",
    age:21
}
console.log(myboj);


const myfunc=function(){
    console.log("hi");
}
console.log(typeof null);   //object
console.log(typeof myfunc);  // object function
console.log(typeof names);  //object