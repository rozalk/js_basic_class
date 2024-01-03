//key value

const person = {
  firstName: "Rojal",
  lastName: "Karki",
  age: 21,
  isAdult: true,
  fullname: function () {
    //normal function inside object... global scoped...
    return this.firstName + this.lastName;
  },
  isEligibleToVote: () => {
    //local scoped...arrow function inside object...
    return person.age > 18;
  },
  facialFeatures: {
    face: "black",
    eyepoint: "brown",
  },
};

console.log(person.facialFeatures);
console.log(person.fullname());
console.log(person.isEligibleToVote());

console.log(person["firstName"]);

//CRUD
// update the Object
person.firstName = "shyam";

console.log(person);
//Delete the property
delete person.facialFeatures;

//create the property...

person.hobby = "reading books";
