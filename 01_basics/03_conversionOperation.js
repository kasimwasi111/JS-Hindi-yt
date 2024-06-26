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

// ****************************Operations*******************

let value = 4;
let negValue = -value;
console.log(negValue); //-4

console.log(2 + 2); //4
console.log(2 - 2); //0
console.log(2 * 2); //4
console.log(2 ** 3); //8
console.log(2 / 3); //0.66666
console.log(2 % 3); //2

let str1 = "Hello";
let str2 = " kasim";
console.log(str1 + str2); //Hello kasim
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
console.log(3 + ((4 * 5) % 3)); //5
console.log(+true); //1
console.log(+""); //0

let counter = 100;
counter++;
console.log(counter); //101
console.log(++counter); //102
