const name='Anisha';
const repo=30;
console.log(`i am ${name} and i made ${repo} repo`);
const gameName=new String('hi-iiii-swudhjd') //work as object
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
const newS=gameName.substring(0,4); //take from 0
const anews=gameName.slice(-8,5);//from negative also
//we have trim
//we have replace
const url="https//anisha%20chh";
console.log(url.replace('%20','_'));
console.log(url.includes('sun')); //f not present
console.log(gameName.split('-')); //split on basis of -