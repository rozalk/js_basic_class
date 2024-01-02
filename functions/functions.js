const a = Number(prompt("Enter any number?"));
const b = Number(prompt("Enter any number?"));

//defining functions ES5(LOCAL SCOPED)...
function add(a, b) {
  return a + b;
}
//defining functions by ES6 (arrow functions) (GLOBAL SCOPE)...
const add=()=> {
return a+b;
}
const sum = add(); //function calling...
console.log(sum);

// TYPES OF FUNCTIONS:
// Nameless Functions / Anonymous functions...
// default functions
// paramerterized functions
// Inline functions
// closure functions
// implicit functions
// explicit functions
// IIFE fubction

const value1 = Number(prompt("Enter the first number"));
const value2 = Number(prompt("Enter the second number "));

//calling functions
const add = sum(value1, value2);
const subb = sub(value1, value2);
const mul = mult(value1, value2);
const divi = div(value1, value2);

//displaying results
console.log(add);
console.log(subb);
console.log(mul);
console.log(divi);

//defining functions
function sum(value1, value2) {
  return value1 + value2; // returning values to variables...
}

function sub(value1, value2) {
  return value1 - value2;
}

function mult(value1, value2) {
  return value1 * value2;
}

function div(value1, value2) {
  return value1 / value2;
}

function checkEvenNumber(value1) {
  return value1 % 2 == 0;
}
const check = checkEvenNumber(value1);
alert(check);

definig through ES6...
const add = () => {
  return value1 + value2;
};

const addition = add(value1, value2);
console.log(addition);

//local scoped vs global scoped...

//write a multiplication table of 3 using functions and loop...

for (let i = 1; i <= 10; i++) {
  //using function inside for loop....
  const multiplicationTable = (i) => {
    return 3 * i;
  };
  const mult = multiplicationTable(i);
  console.log(mult);
}

const a = 3;

const mul = (num, i) => {
  return num * i;
};

for (let i = 1; i <= 10; i++) {
  const res = mul(a, i);
  console.log(res);
}

