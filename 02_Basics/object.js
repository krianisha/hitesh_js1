//2 type me object bnta h through literals jo singleton ni h and other through custrocter jo singleton h
Object.create //custructore object
 
//literal object

const mysym=Symbol("key1")
const jsuser={
    name: "Anisha",
    [mysym]:"mykey1", //imp square brachet needed to treat as symbole
   age:18,
   location:"mumbai",
   email:"fghnm",
    
}
console.log(jsuser.email); //1 way
console.log(jsuser["email"]); //2 way yahi use hota h
console.log(jsuser[mysym]) //imp
//Object.freeze(jsuser) //we cant chaneg email or other attribute
jsuser.greeting = function(){
   console.log("jii");
}
//console.log(jsuser.greeting) //undefined
console.log(jsuser.greeting())
jsuser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
 }
 console.log(jsuser.greeting2())