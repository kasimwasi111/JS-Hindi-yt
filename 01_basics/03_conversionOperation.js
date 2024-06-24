// String to Number
let score = "3avbg";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN

// Note:------->>

// "33"=>33
// "33avbg"=>NaN
// true=>1; false=>0;

let isLoggedIn = 1; // ""=>false, "kasim"=>true
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true

// Note:------->>

// 1=>true: 0=>false
// ""=>false
// "kasim"=>true
// 7=>true
// -7=>true
