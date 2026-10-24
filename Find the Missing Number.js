let arr = [4, 1, 3, 4];
let missing = [];
for (let index = 1; index <= 5; index++) {
    if(!arr.includes(index))
    {    missing.push(index);
   }
}
console.log("missing "+missing);