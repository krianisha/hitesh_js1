// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //semicolone iife ko stop krta h warna ye run hi krte rhega or dusra code run krne ke liye error dega


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//global scope ke pollution se issue hoti h kai baar to usse bacjne ke liye iife ka use kret h