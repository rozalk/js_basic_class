const myData = () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const age = document.getElementById("age").value;
  const mail = document.getElementById("mail").value;
  const pass = document.getElementById("pass").value;

  console.log({ fname, lname, age, mail, pass });
};
