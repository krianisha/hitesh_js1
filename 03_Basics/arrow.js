const user={
    username:"Anisha",
    price:999,
   welcome: function(){
          console.log(`${this.username} welcome to website`)  //current context pr baat ho rhi h no only about hitest
          console.log(this);
    }
}
//user.welcome(); //Anisha

//user.username="sam"
//user.welcome();  //sam
//console.log(this);   //agr sirf ye run krte to {} empty deta because jb globle ke andr context ni h
//intervie
//1. browser ke ander global object jo h wo h window



// function chai (){
//    // console.log(this);   //ab yha node environement kr inside ya function ke inside bhut value aati h cosole krne pr but bhar ni aarhi thi
//    let u='ANISHA'    
//    console.log(this.u);   //undefined dega because this hmlog object me aese acces kr skte h pr function me ni
// }
// chai();


// const chai=()=>{
//    let u='ANISHA'    
//     console.log(this.u);     //not run give undefined
//  }
//  chai();



//ARROW FUNCTION
//explicit
const addtwo=(a,b)=>{
    return a+b;
}
console.log(addtwo(1,2));


//implicit return

const add=(a,b)=>a+b;
const add1=(a,b)=>(a+b);
const add2=(a,b)=>({username:"hitesh"});   //way to return object
console.log(add2(1,2));

