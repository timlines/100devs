//---Easy
//create a function that subtracts two numbers and alerts the difference

function calSubtractTwo (x, y) {
    console.log(x - y);
}

calSubtractTwo(3,1);

//create a function that divides three numbers and console logs the quotient

function calDivideThree(x, y, z){
    result = x / y / z;
    console.log(result);
    return result;
}

let divideResult = calDivideThree(12, 4, 3)

console.log("Divide three numbers: " + divideResult);

//create a function that multiplys three numbers and returns the product

function calMultiplyThree(x, y, z){
    let result = x * y * z;
    return result;
}

let product = calMultiplyThree(5,10,2);
console.log("You have " + product + " money.")

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function calTakeThree (x, y, z){
    return (x + y) % z;
}

let result3 = calTakeThree (3, 4, 2);
console.log("The remainder is: " + result3);

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function calTakeFour (w, x, y, z){
    let multiply = w * x;
    let result = 0;
    if (multiply > 100){
        result = multiply + y + z
    }

    return result;
}

console.log(calTakeFour(5, 25, 1, 1));