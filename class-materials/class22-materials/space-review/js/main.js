//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let myArr = [1, 4, 9, 16, 25];

let startValue = 0;

let sum2 = myArr.reduce( (accumulator, currentValue) => accumulator + currentValue, startValue) 

console.log(sum2);


let nums = [42,19,77,33,57]

let sum = nums.reduce( (acc,c) => acc + c, 0 )



//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function sqrArr(arr){
    
    let resultArr = arr.map((value, index) => Math.sqrt(value))


    return resultArr;
}

console.log(sqrArr(myArr));

//Create a function that takes string
//Print the reverse of that string to the console


function takeStr(str){
    return str.split('').reverse().join('');

}

console.log( takeStr('word') ) ;

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrom(){
   //if first characters are the same as last characters
   // madam  or nurses run 
}
