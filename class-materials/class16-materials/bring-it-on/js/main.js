// *Variables*
// Create a variable and console log the value
let bringItOn = "Bring it on!";
console.log(bringItOn);

// Create a variable, add 10 to it, and alert the value

let addTen = 10;
addTen = addTen + 10;
alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractsFour(w, x, y, z){
    alert(w - x - y - z);
}

subtractsFour(5, 4, 3, 2);

// Create a function that divides one number by another and returns the remainder

function divideTwo(x, y){
    return x % y;
}

console.log(divideTwo(12,3));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji(x, y){
    let sum = x + y;
    if (sum > 50){
        alert("Jumanji");
    }
}

jumanji(50, 1);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiply3(n1, n2, n3){
    num = n1 * n2 * n3
    if (num % 3 === 0){
        alert("Zebra");
    }
}

multiply3(3, 3, 3);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNumber (word, number){
    for (let i = 0; i < number; i++){
        console.log(word);
    }
}

wordNumber("Bring it on!", 3);
