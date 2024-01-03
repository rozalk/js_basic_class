// write a js function that returns a string that has letter in alphabetical order.
//Example string:'webmaster'
//expected output:'abeemrstw'

const sorting = (string) => {
  let stringarray = string.split(""); //splitting

  stringarray.sort(); //sorting

  let sortedvalue = stringarray.join(""); //joining...

  return sortedvalue; //returning value...
};

let sortstring = "webmaster";
let result = sorting(sortstring); //function call...
console.log(result);

//Spread Operator...

const arr = [
  { name: "ram", age: 20 },
  { name: "hari", age: 10 },
  { name: "shyam", age: 15 },
];

const obj = {
  name: "a",
  address: "b",
  password: "c",
  roles: [],
  isActive: false,
};
//delete obj.password;  donot do this...
const { password, roles, ...data } = obj;
console.log({ data });

const [a, ...rest] = arr;
console.log(rest);

//write a js function that returns true if the value is palindrome else false?
//EG: MOM//IS Palindrome...
