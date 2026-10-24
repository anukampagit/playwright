let array =[11,22,33,44,55,66];

let odd = [];
let even =[];

for (let num in array)
{
    if(array[num] % 2 === 0)
    {
        even.push(array[num]);
    } 
    else{
        odd.push(array[num]);
    }  

}

    
    console.log('odd ' + odd);
    console.log('even ' + even);