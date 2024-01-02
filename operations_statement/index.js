console.log("Hello World");
const var1 = "Rojal";
const var2 = 21120112;
console.log(var1);
console.log(var2);
const var3 = true; //boolean
console.log(var3);

const num1 = prompt("Enter first number");
const num2 = prompt("Enter second number");
//if conditions

if (num1 < num2) {
  //comparing
  alert("Hello"); // alert windowg
} else {
  alert("BYE");
}
//Logical operations
if (num1 > 10 || num2 < 15) {
  // logical or
  alert("Hello i am right");
} else {
  alert("BYE");
}
if (num1 < 10 && num2 > 15) {
  // logical and
  alert("Hello i am alwaysright");
} else {
  alert("BYE I WAS WRONG");
}
const add = Number(num1) + Number(num2); //adding two numbers

alert(add);

const str1 = 15;
const str2 = 20;

if (str1 != 20) {
  console.log("Meow");
}
let number; //undefined

if (!number) {
  alert("Found"); //number present or not
}

//STATEMENT...............
//IF ELSE
// SWITCH CASE
const value = Number(prompt("Enter a value :"));
switch (value) {
  case 1:
    console.log("You entered number 1");
    break;
  case 2:
    console.log("you entered number 2");
}
