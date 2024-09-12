function sumMix(x){
    return x.reduce((acc, val) => acc + Number(val), 0,);
}

let myArray = [1, '2', 3, '4', 5]
let result = sumMix(myArray);

console.log(result);

