// function collinearity(x1, y1, x2, y2){
//     if ( (y1 * x2) == ( x1 * y2 ) ){
//         return true;
//     }
// }

// console.log( collinearity(1, 1, 1, 1));



// let bestRappers2020 = ['Dylan', 'Polo G', 'Dylan']

// let bestRappersAllTime = bestRappers2020.map( d => 'dylan');


// console.log(bestRappersAllTime);


function fixText(string){
    return string.replace(/[5]/g, 'S').replace(/[0]/g, 'o').replace(/[1]/g, 'I');
}

console.log(fixText('The 5l1ppery 5l0pe 15 0pen'));



function isTrue(bool){
    return bool ? 'True' : 'False';
}

console.log(isTrue(true));


function disemvowel(str){
    return str.replace(/[aeiou]/ig, '');
}


function twoSum(){

}

const doubleChar = (str) => str.repeat(2);

console.log(doubleChar('hello'));


for ( let i = 0; i < 100; ) console.log( (++i % 3 ? '': "Fizz") + (i % 5 ? '': "Buzz")|| i);


function countSheeps(sheep){ return sheep.filter(Boolean).length}


function basicOp(operation, value1, value2){
    //Code
    if ( operation === '+' ){
      return value1 + value2;
    }
    
    
    
  }