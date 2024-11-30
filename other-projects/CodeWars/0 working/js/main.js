var countSheep = function (num){
    
    //Given a non-negative integer, 3, return a string with a murmur: '1 sheep'... 2 sheep 3 sheep'
    let murmur = '';
    
    //
    
    for ( let i = 1; i <= num; i++){
      murmur = murmur + `${i} sheep...`
    }
    
    return murmur;
    
  }
  
  console.log(countSheep(3));