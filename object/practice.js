//write a function that returns username who has admin access...

/*
[
{name:"raktim",roles:["admin"]},
{name:"harry",roles:["guest"]};
{name:"sita ",roles:["admin","vendor"]}
]
 
*/
const user = [
  { name: "raktim", roles: ["admin"] },
  { name: "harry", roles: ["guest"] },
  { name: "sita ", roles: ["admin", "vendor"] },
];

const checkRole = (role) => {
  //   const newUsers = user.map((user) => {
  //     if (user.roles.includes(role)) return user.name;
  //   });
  //   return newUsers;
  return user.filter((user) => user.roles.includes(role));
};

const res = checkRole("admin");
console.log(res);

//write a function that sum every character from 0 to 100;

const sumEvery = () => {};
const resu = sumEvery();

//write a pagination function that returns  5 times on page change
// ['1','2','3','4','5','6','7','8']
