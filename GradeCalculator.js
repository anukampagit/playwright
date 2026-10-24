//const score = Number(require('fs').readFileSync(0, 'utf8').trim());
const score = Number(99);
if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}