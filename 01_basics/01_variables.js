const accoutnId = 144553
let accountEmail = "harshit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accoutnId = 2;

accountEmail = "hc@hc.com"
accountPassword = "21212"
accountCity = "Bareilly"
let accountState;


console.log(accoutnId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accoutnId, accountEmail, accountCity, accountPassword, accountState]);
