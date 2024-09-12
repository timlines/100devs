//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

myArr = [1, 2, 3, 4, 5, 6, 7, 8]

// function newEvenArray (arr){
    
//     let newArray = []
    
//     for (let i = 0; i < arr.length; i++)
//         if (arr[i] % 2 === 0){
//             //even
//             newArray.push(arr[i]);
//         }
//     return newArray;
// }

// let result = newEvenArray(myArr);

// console.log(result);


let newMapArry = myArr.map( x => x % 2 ?  : x)

console.log(newMapArry)


function onlyEvens(nums){
    let evens = []

    nums.forEach( n => {
        //if even add to new array
        if ( n % 2 === 0){
            evens.push(n)
        }
        
    })

    return evens
}


// console.log(onlyEvens([1, 2, 3, 4, 5, 6]));


let bestColor = ['green', 'blue', 'yellow', 'red']

bestColor[bestColor.length - 1]