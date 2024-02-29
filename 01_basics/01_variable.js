const accountId = 4097
let accountEmail = "codewithbushra@gmail.com"
var  accountPassword = "12345"
accountCity = "china"
let accountState;

// accountId = 2 // Not Allowed
accountEmail = "codebushra@gmail.com"
accountPassword = "54321"
accountCity = "Pakistan"

/*
prefer not to use var beacuse of issue in block scope and functional scope
*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountCity ,accountEmail ,accountId ,accountPassword ,accountState])