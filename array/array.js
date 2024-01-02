//ARRAY...
//Array index always starts from 0...
const person = [
  { name: "Ram", age: 20 },
  { name: "Rojal", age: 21 },
  {},
  {},
  { name: "ronash" },
];

console.log(person);
console.log(person[person.length - 1]); //reading last number of array...

//update...
person[0] = { name: "shyam" };
person[3] = { name: "rowszal" }; //create...

console.log(person);

// deleting...
delete person[0];

//LOOP inside array...

const people = [{ name: "Rojal" }, { name: "ronash" }];

//functions to console the name
const showName = (people) => {
  console.log(people.name);
};

//loop using for loop...

for (let i = 0; i < people.length; i++) {
  showName(people[i]);
}

//Loop using array inbuilt features...
//direct source data manipulation...

people.forEach(showName);

//Advanced technique
//Immutable JS
//create a shallow copy and operate on it.
//ES6
//map,filter,reduce,every,some.

people.map((people) => showName(people));

//write a functions to sort the array by age in ascending order

const ex = [
  { name: "ram", age: 20 },
  { name: "hari", age: 10 },
  { name: "shyam", age: 15 },
];
// const showAge = (ex) => {
//   console.log(ex[i]);
// };

// for (let j = 0; j < ex.length; j++) {
//   showAge(ex[i]);
//  }
// Array.prototype.sort(ex.age > 0);

const newAr = ex.sort((a, b) => a.age - b.age);
console.log(newAr);
