// let array =[1,2,3,4,5]
// array.sort((a,b)=>a-b)
// console.log('Second Smallest : '+array[1]);

// Write your solution here

// let arr = [1, 1, 2, 3, 5];

// let unique =[...new Set(arr)];
// unique.sort((a, b) => a - b);

// console.log(unique[1]);

let arr = [11, 22, 44, 55];

let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr.length; i++) {

    console.log('current number:::: ' + arr[i]);
    console.log('smallest : ' + smallest);
        console.log('secondSmallest: ' + smallest);
    console.log("arr[i] < smallest ",arr[i] < smallest);
    console.log( 'arr[i] < secondSmallest && arr[i] !== smallest' ,arr[i] < secondSmallest && arr[i] !== smallest);
    if (arr[i] < smallest) {
        console.log('if......');

        secondSmallest = smallest;
        smallest = arr[i];
        
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        console.log('else......');
        console.log(33 < secondSmallest);
        console.log(33 !== smallest);

        secondSmallest = arr[i];
    }
}

console.log(secondSmallest);