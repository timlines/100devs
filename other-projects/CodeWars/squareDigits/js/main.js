function squareDigits(num){
   
    const digitsArray = Array.from(String(num), Number).map( n => n ** 2).join('');
      
    
    return digitsArray;

    
    
}

console.log(squareDigits(3212)); //