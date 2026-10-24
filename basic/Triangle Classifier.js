let a = 5;
let b = 5;
let c = 5;

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Invalid Triangle");
} else if (a === b && b === c) {
    console.log("Equilateral Triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}