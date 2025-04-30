//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c=2003
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);  ye kahi vi accesseble h or redifine vi krenge scope ke bhar to confuse kr det ah 


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // give erroe jb neeche jaisa function bnta h to error deta h agr phle varible function acses kre to
const addTwo = function(num){
    return num + 2
}