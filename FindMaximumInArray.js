let array = [10, 20, 30, 40, 50];
let max = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > max)
        max = array[i];

}

console.log('Max Number :',max)

let maxMethod = Math.max(array);

console.log('maxMethod :',max)

let maxReduce =array.reduce((a,b)=>a>b?a:b)
console.log('maxReduce :',max)