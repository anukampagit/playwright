let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let merged =[...arr1,...arr2];
merged.sort((a,b)=>a-b);
console.log(merged.join(" "));