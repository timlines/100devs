function sumArray(array){
    
    if ( array === null ) {
        return 0;
    }
    
    
    let sorted = array.sort((a, b) => a-b);
    let sum = 0;
    for ( let i = 1; i < sorted.length - 1; i++){
        sum = sorted[i] + sum;
    }
    return sum;
}


console.log(sumArray([  ]))



// if ( array === null ) {
//     return 0;
//   }
    
//   let mid = array.filter((number) => number < Math.max(...array) && number > Math.min(...array) ? number : 0 )

//     return mid.reduce((acc, c) => acc + c, 0) ;