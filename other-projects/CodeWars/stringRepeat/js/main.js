// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> ouput)

// 6, "I" -> "IIIII"
// 5, "Hello" -> 


// function repeatStr (n, s) {
//     let str = '';

//     for (let i = 0; i < n; i++){
//         str += s;
//     }

//     return str;
// }


// console.log(repeatStr(6, 'I'));

// Examples

// 1
// 


function repeatStr (n, s) {
    return s.repeat(n);
}


let result = repeatStr(5, 'i');

console.log(result);