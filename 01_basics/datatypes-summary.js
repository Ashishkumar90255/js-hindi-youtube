// Primitive Datatypes(Call by value)

// 7 types : String , Number , Boolean , Null , undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34495329533655n




// Non Primitive Datatypes (Call by Reference)

//Array, Objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//*******************************************

//Stack(Primitive)Get a copy value, Heap(Non Primitive)cGet a original value

let myYoutubename = "harshitsaxena.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com" ,
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "harshit@google.com"

console.log(userOne.email);
console.log(userTwo.email);





