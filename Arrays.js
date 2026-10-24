/* let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits.at(1));
console.log(fruits.at(-4));
console.log('Length:',  fruits.length);
console.log(typeof fruits); */


//1
/* let fruits5 = ["Apple", "Banana", "Mango"];
let fruits6 = new Array("Apple", "Banana", "Mango")
let numbers = new Array(5); 
let letters = Array.from("HELLO");
let data = [10, "Hello", true, null]; console.log(data);
*/

//-------------------------------------------------
let fruits7 = [];
fruits7.push("Apple");
fruits7.push("Banana");
fruits7.push("Mango");
console.log(fruits7);

fruits7.shift();
console.log(fruits7);
fruits7.shift();
console.log(fruits7);

fruits7.unshift("Grapes");
console.log(fruits7);

fruits7.splice(0,2);
console.log('splice :',fruits7);

fruits7.splice(0,0,"hi");
console.log('splice :',fruits7);





