//Create a stopwatch object that has four properties and three methods

// let stopwatch = {
//     Time: 4.5,
//     Color: "Black",
//     Shape: "Round",
//     Brand: "Garmin",

//     stopwatch.start(){
//         return "Start";
//     }
//     stopwatch.stop(){
//         return "Stop";
//     }
//     stopwatch.split(){
//         return "Split";
//     }


// };

// let stopwatch = {}

// stopwatch.brand = 'Nike'
// stopwatch.color = 'black'
// stopwatch.shape = 'round'
// stopwatch.size = 'shmmmedium'

// stopwatch.start = function (){
//     console.log('STARTINNNGGG')
// }

// stopwatch.Stop = function (){
//     console.log('STOPPINNNGGG')
// }

// stopwatch.sayBrand = function (){
//     console.log(stopwatch.brand)
// }


// funciton sumSecondLowAndHigh(arr) {

//     let sorted = arr.sort((a,b) => a-b);
//     alert( sorted[1] + sorted[ sorted.length -2] ) 
// }


// console.log(solution('world')); // => 'dlrow'
// console.log(solution('words')); // => 'drow'

// function solution2(str){
//     let result = '';

//     for (let i = 1; i <= str.length; i++){
//         result += str[str.length - i]
//     }
    
//     return result
// }


// function solution(str){
//     return str.split('').reverse().join();
// }

// We need a funciton that can transform a number (integer) into a string

// 123 --> "123"

function numberToString(num){
    // 123
    return "" + num
}

console.log(numberToString(123));


function solution (str) { return str.split('').reverse().join()}