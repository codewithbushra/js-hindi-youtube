//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Hamdan", "Mirha", "Hamza"];
let myObj = {
    name: "Bushra Khan",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/**********************Memory***************************/

//stack (primitive) ,Heap (Non Primitive)

let myYoutubename = "Code with Bushra"
let anotherName = myYoutubename

anotherName = "Bushra Anwar Vlog"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
   email : "codewithbushra@gmail.com",
   mob : +9212345678
}
let userTwo = userOne

userTwo.email = "bushranwar@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);