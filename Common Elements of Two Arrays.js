
let arr1 = [1, 2, 3, ];
let arr2 = [3, 4, 5];

let common = [];

for (let i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i]))
        common.push(arr1[i]);
    
}

console.log("common ",common.join(" "));