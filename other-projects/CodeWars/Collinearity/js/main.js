function collinearity( x1,y1, x2,y2 ) {
  
    return x1 * y2 === y1 * x2;
      
}
collinearity(1,1,6,1);



// function collinearity(x1, y1, x2, y2){

//     let vector1 = x1 / y1
//     let vector2 = (2 * x2) / (2 * y2)
    
//     if (vector1 === vector2){
//         return true;
//     }else
//         return false;
    
// }



 //if is collinear return true
    // In terms of coordinates, vectors (x1, y1) and (x2, y2) are collinear 
    // if (x1, y1) = (k*x2, k*y2) , 
    // where k is any number acting as a coefficient.



// if (vector1 === vector2){
//     console.log( `(${x1}, ${y1}, ${x2}, ${y2}) → ${true}`);
// }else
//     console.log( `(${x1}, ${y1}, ${x2}, ${y2}) → ${false}`);