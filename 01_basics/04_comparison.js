console.log("2" > 1); //true
console.log("02" > 1); //true
console.log(2 > "1"); //true
console.log("02" > true); //true
console.log(2 > true); //true
console.log("kasim" > 2);

console.log(+null); //0
console.log(null < 0); //false
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true

console.log(undefined == 0); //false loosely comparison
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false
console.log(undefined == null); //true
