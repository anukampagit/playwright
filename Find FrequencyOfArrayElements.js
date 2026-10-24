let arr = ["anu","anu", "pari"];
let freq = {};

for (let i = 0; i < arr.length; i++) {
    
    let num=arr[i];
    if(freq[num])
        freq[num]++;
    else
        freq[num]=1;
}
  console.log(freq);
for (let keys in freq) {
    if (freq[keys] >= 1) {
     //   console.log(keys + " appears " + freq[keys] + " times");
     console.log(Object.entries(freq));
    }
}


//let num = arr[i]; console.log('num :',num);

    // if (freq[num]) {
    //     console.log("if :",freq[num]);
    //      console.log("if :",num);
    //     freq[num]++;
    // } else {
    //    console.log("else",freq[num]); 
    //     freq[num] = 1;
    // }
    // console.log('freq :',freq);

