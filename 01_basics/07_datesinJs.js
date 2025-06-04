//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 24)
// let myCreatedDate = new Date(2025, 0, 24, 13, 3)
// let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})





