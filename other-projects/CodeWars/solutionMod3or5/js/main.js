function solution(number){
    
    let sum = 0;
    
    if ( number < 0 ){
        return 0;
    }else{
        for( let i = 1; i < number; i++){
            if ( !(i % 3) && !(i % 5) ){
                
                sum = sum + i;
            }else if ( !(i % 3) ){
                
                sum = sum + i;
            }else if ( !(i % 5) ){
                
                sum = sum + i;
            }
        
            
        }
    }


return sum;


}

console.log(solution(10)); // 



// Natural numbers below 10, multiples of 3 or 5
// 3, 5, 6, and 9 
// The sum of the multiples is 23 = 3 + 5 + 6 + 9

// if the number is negative return 0

// if the number is both a multiple of 3 and 5 only count it once.