function squareSum(numbers){

    
    let result = 0;
    
    for (let i = 0; i < numbers.length; i++){
        
        number = numbers[i];
        
        number **= 2;
      
        result = number + result;
        
    }

    return result;
}

console.log(squareSum([ 2, 1, 2, ])); // Should return 9 because 1^2 + 2^2 + 2^2 = 9

