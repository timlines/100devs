//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const arr = [1, 2, 3, 4, 5 ]

alert( arr.reduce( (acc, c) => acc + c, 0) );

// arr.sum();

// //Create a function that takes in an array of numbers
// //Return a new array of numbers that is every original number squared

const nums = [1, 2, 3, 4, 5]

let newArr = nums => nums.map( num => num**2 );

alert( newArr); 


// function squared (arr){
//     return arr.squared();
// }

// //Create a function that takes string
// //Print the reverse of that string to the console

let unoReverse = str => console.log( str.split('').reverse().join(''));

// function reverse(str){
//     str.split('').reverse().join('');
// }

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => alert( str === str.split('').reverse().join(''));

palindromeCheck('racecar');


// function palindrome(str){
//     let reverseStr = str.split('').reverse().join('');

//     return reverseStr === str;
// }

// console.log(palindrome('eye'));
