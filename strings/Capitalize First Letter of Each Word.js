let str = "javascript is easy to learn";

let words = str.split(" ");
let result = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let capitalized = word[0].toUpperCase() + word.slice(1);

    result.push(capitalized);
}

console.log(result.join(" "));