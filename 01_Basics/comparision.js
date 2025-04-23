console.log(1<2);

//confusing
console.log("2">1); //t
console.log("02">1);//t

//avoide this but sometimes NULL treted and nan or some times as 0 u donot predict 
console.log(null>0);  //f
console.log(null==0);  //f
console.log(null<0);   //f
console.log(null>=0);  //t

console.log(undefined>0);  //f
console.log(undefined==0);  //f
console.log(undefined<0);   //f
console.log(undefined>=0);  //f

//strict check
console.log("2"===2); //f
