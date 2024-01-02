// const a = 10;
// const b = 20;

// const res = (a, b) => {
//   return a + b;
// };
// const result = res(a, b);
// console.log(result);

// TYPES OF FUNCTIONS:
// Nameless Functions / Anonymous functions...
//============================================

const a = function () {
  //function keyboard must be used..
  console.log("Hello i m rozal");
};
// default functions eg:in pagination...
//====================================
// multiplication table of
const mul = (a = 3, b) => {
  return a * b;
};
//const result = mul(undefined, 2);
//console.log(result);

// paramerterized functions
//==============================

// Inline functions if we assign variable to nameless functions it is inline functions...
//======================================
//concept reuseability...
const footer = function () {
  console.log("anonymous");
};
footer();
footer();

// closure functions function sthat returns the hardcoded variable stored inside the function..
//========================
//use case: used to get secret environment variables used in the applications...
const secret = () => {
  const password = "Password";
  return password;
};
console.log(secret());
const sec = secret();
console.log(sec);

// implicit functions// returning without using return keyword...
//==========================

const addit = (a, b) => a + b;

// explicit functions
//===============

const additi = (a, b) => {
  return a + b;
};

// IIFE function Immediately Invoked functional expression...
//========================
(function () {
  console.log("I am IIFE Functions");
})();
(function (a, b) {
  console.log(a + b);
})(1, 2);

//pagination Logic

//[1, 2, 3, 4, 5, 6, 7, 8, 9];

const pagination = (page = 1, size = 5) => {
  for (let i = page; i <= size; i++) {
    console.log(i);
  }
};

const result = pagination(3);
