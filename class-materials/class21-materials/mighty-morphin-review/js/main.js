// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = 'Labor day';

favHoliday = 'Easter';

favHoliday = favHoliday.toUpperCase();

// console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = "string";

function lastThree(string){
    word = '';
    word += string[string.length - 3]
    word += string[string.length - 2]
    word += string[string.length - 1]
    
    return word;
}


let favPowerRangersSeries = 'Alien Rnagers';
// alert( favPowerRangersSeries.slice(-3));


// alert(lastThree(str));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

// function subtract5(n1, n2, n3, n4, n5){
//     let result = 100 - n1 - n2 - n3 - n4 - n5;
//     alert(result);
// }
// subtract5(1, 2, 3, 4, 5);


function minusFiveAndAbs(n1, n2, n3, n4, n5){
    let difference = 100 - n1 - n2 - n3 - n4 - n5;
    alert(Math.abs(difference));
}

// minusFiveAndAbs(27, 83, 42, 1, 5);




// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

// 1, 2, 3, 99, 6, 4

// function take3(n1, n2, n3){
//     let lowest = n1;
//     let highest = n1;

//     let nums = [n1, n2, n3];

//     for (let i = 0; i < nums.length; i++){
//         if(nums[i] < lowest){
//             lowest = nums[i]
//         }else if (nums[i] > highest){
//             highest = nums[i];
//         }
//     }



//     console.log("Lowest: " + lowest + "\n" + "Highest: " + highest)
// }

// take3(3, 2, 1);


function logHighAndLow(n1, n2, n3){
    let min = Math.min(n1,n2,n3);
    let max = Math.max(n1, n2, n3);

    console.log(`The lowest num is ${min}, and the highest num is ${max}`);
}

// logHighAndLow(100, 50, 25);


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


function headsOrtails2(){
    if( Math.random() > 0.5){
        return "Heads";
    }else{
        return "Tails";
    }
}

// function headsOrTails(){
//     let result = Math.random();
//     if(result < .5 ){
//         return "Heads";
//     }else{
//         return "Tails";
//     }
// }

const headsOrTails = _ => Math.random() < .5 ? "Heads": "Tails";


// console.log(headsOrtails());



//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.


function takeNumber(num){
    
    while (num > 0){
        console.log(headsOrTails());
        num --;
    }

    
}

// takeNumber(5);


function flipFlipFlipadelphia(n){
    for(let i = 1; i <= n; i++){
        let result = headsOrTails()
        console.log(result);
    }
}

flipFlipFlipadelphia(1);
