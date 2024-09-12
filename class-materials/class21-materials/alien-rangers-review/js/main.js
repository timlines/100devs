//Arrays

//Create and array of tv shows. Loop through and print each show to the console

// let tvShows = ["show1", "show2", "show3"]

// for (let i = 0; i < tvShows.length; i++){
//     console.log(tvShows[i]);
// }


// let powerRangers = ['Mighty Morphin', 'Alien Rangers', 'Zeo']

// powerRangers.forEach( show => console.log( show ) );

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays


// let evenNums = [];

// evenNums = nums.forEach( (num) => num % 2 ? "no" : num );

// console.log(evenNums);


// let nums = [21, 56, 88, 24, 99, 710];
// let onlyEvens = arr => arr.filter( n => n % 2 === 0 )

// console.log(onlyEvens(nums));

// 21 => 21 % 2 === 0 = false
//  56 % 2 === 0 = true
//  88 % 2 === 0 = true
//  24 % 2 === 0 = true
//  56 % 2 === 0 = true

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number


// let sampleArray = [1, 2, 3, 4]

// function takeArray(arr){
    
    
    
//     alert(result);
// }

function sumSecondLowAndhigh(arr){
    let sorted = arr.sort((a,b) => a-b);
    alert( sorted[1] + sorted[ sorted.length - 2] )
}

sumSecondLowAndhigh([2, 3, 1, 5, 4]);

