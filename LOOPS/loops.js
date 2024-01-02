//Ternary operator...
//
//syntax:
//const result= a===1?console.log("1"):a===2?console.log("2"):console.log("3");
const age = prompt("what is ur age ?");
const remanAge = 18 - age;

if (age > 100) {
  alert("You r not alive");
}
const gender = prompt("What is ur gender?");

const result =
  age >= 18
    ? alert("you can vote wait for: " + remanAge)
    : alert("You can't vote wait for: " + remanAge);
const result1 =
  gender === "m" ? alert("You are male") : alert("You are female");
//DRY= dont repeat yourself=>function...
//SOC=seperation of concern...

for (let a = 1; a <= 100; a++) {
  console.log(a);
}
for (j = 1; j <= 10; j++) {
  //using for loop...
  let mult = 5 * j;//multiplication table of 5
  console.log(mult);
}
let i = 1;
do {
  // using do while loop...
  let multi = 10 * i;//multiplication table of 10
  console.log(multi);
  i++;
} while (i <= 10);

let m = 1;
while (m <= 10) {
  // using while loop...
  let mul = 15 * m;//multiplication table of 15
  console.log(mul);
  m++;
}
?