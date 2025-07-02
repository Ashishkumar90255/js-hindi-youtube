// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Ashish",
    "full name" : "Ashish kumar",
    [mySym] : "mykey1",
    age : 18,
    location: "Jaipur",
    email: "Ashish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "harshitsaxena90255@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "harshitsaxena603@gmail.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
