//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// myArr = [10, 2, 3]

// function multiplyArr(arr){
//     let prod = 1;

//     arr.forEach(element => {
//       prod = element * prod;
        
//     });

//     alert( prod);
// }

// console.log(multiplyArr(myArr));

// function multiNumsInArr(arr){
//     let product = 1;
//     arr.forEach( num => product *= num )
//     alert(product)
// }

console.log(multiNumsInArr([10,2, 3]))

function multiNumsInArr(arr){
    let product = 1;

    for(let i = 0; i < arr.length; i++){
        product *= arr[i];
    }
}


let bestRappers2020 = ['6ix9ine', 'Polo G', '6ix9ine']

let removed = bestRappers2020.shift()

console.log( bestRappers2020 ) // ['Polo G', ]

let bestRappers2020 = ['Dylan', 'Polo G']

bestRappers2020.push('Dylan');

Modify the array

let bestRappers2020 = ['Dylan', 'Polo G', 'Dylan']

let bestRappersAllTime = bestRappers2020.map(x => 'Dylan')


