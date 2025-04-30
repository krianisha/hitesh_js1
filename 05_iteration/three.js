// for of

// ["", "", ""]   string
// [{}, {}, {}]   object

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
  //  console.log(num);
}

const greeting="Hello Anisha"
for(const greet of greeting){
    console.log(`each char of greeting ${greet}`)
}

// Maps

const map=new Map()
map.set("IN","INDIA")
map.set("BR","BIHAR")
map.set("JH","JHARKHAND")
for (const [key,value] of map) {
    //console.log(`${key} :- ${value}`)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {      this will throw error map not work on object
//     console.log(key, ':-', value);
    
// }