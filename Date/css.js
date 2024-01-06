console.log("Hello from date ");

//Date
const today = new Date(); //default current date and time...
const sometime = new Date("2016-01-20");

console.log({ today, sometime });

//ISO DATE TIME
const now = today.toISOString();

console.log(now);

console.log(today.getDay());
console.log(today.getFullYear());

//write a functions that accept the date and time show which day as date

const dayFinder = (date) => {
  const daay = new Date(date); //object...
  return daay.getDay();
};

const res = dayFinder("2024-01-05"); //call...
console.log(res); //for chckingg...

switch (res) {
  case 0:
    console.log("Sunday");
    break;

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("Not saturday");
}
