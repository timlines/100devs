function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + (num * num), 0);           
}

console.log(squareSum([ 2, 1, 2, ])); // Should return 9 because 1^2 + 2^2 + 2^2 = 9

