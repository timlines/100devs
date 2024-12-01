//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 



function reverseParty(arr){
    return arr.reverse();
}


let myParty = ['Charmander', 'Squirtle', 'Bulbasaur', 'Butterfree', 'Garados', 'Jigglepuff'];
console.log(reverseParty(myParty));


// let myPokemon = ['Charmander', 'Squirtle', 'Bulbasaur', 'Butterfree', 'Garados', 'Jigglepuff'];

// console.log(myPokemon);

// function reversePokemon(arr) {
//     return arr.reverse();
// }

// console.log(reversePokemon(myPokemon));



//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in 'a' is strictly greater than the sum of the cubes of each element in 'b'.


function sumOfSquares2 ( a, b){
    return a.map( ( element ) => element ** 2 ) > b.map( ( element ) => element ** 3 )
}

// console.log(sumOfSquares2( [4], [2] ))

function sumOfSquares( a, b){
    return ( a.forEach((element) => element ** 2) > b.forEach((element) => element ** 3) )
}

// console.log(sumOfSquares( [4], [2] ));



function compareSquareAndCube(a, b){
    return a.reduce((accumulator, currentValue ) => accumulator + currentValue ** 2, 0) > b.reduce((accumulator, currentValue ) => accumulator + currentValue ** 3, 0)
}


// pass in 2, 2^2 + 0 = 4, 4 + 2^2 = 8, 2^2 + 8 = 12


console.log(compareSquareAndCube([2, 2, 2], [2, 2, 2]))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function returnArray2(arr){
    return arr.map( ( element ) => element * arr.indexOf(element) )
}

// console.log(returnArray2([22, -6, 32, 82, 9, 25])) //  [-6, 32, 25]


function isMultiple( arr) {
    return arr.filter((e,i) => e % i === 0 ) // -6, 32, 25
}






//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function getSum( arr ) {
    return arr.reduce((a, b) => a + parseInt(b), 0);
}

// console.log( getSum([ 1, 2, 3, 'a', 'b', 'c']));

function sumOfValues ( arr ) {
    return arr.reduce((acc, c) => acc + Number(c), 0)
}





const s = a => a.reduce((a, c) => +a+ +c)

console.log(s(['5', 3, '2', '1']));

