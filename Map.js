let numbers = [1, 2, 3, 4, 5];
let result = numbers.map(num => num * 2);
console.log(result);


let names = ["ram", "shyam", "amit"];
let result1 = names.map(name => name.toUpperCase());
console.log(result1);


let users = [
  { name: "Ram", age: 20 },
  { name: "Amit", age: 25 }
];

let names0= users.map(user => user.name);
console.log('only name  :',names0);
let names1 = users.map(user => user.name.toUpperCase());
console.log('Upperscase  :',names1);
console.log(users.map(x =>x.age));


