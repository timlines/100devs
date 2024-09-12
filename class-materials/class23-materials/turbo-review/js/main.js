// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

// const str = "Is this the best week ever?"

// alert( str.endsWith('?') );



// let myvariable = "Is this sentance a string?";
// alert(myvariable.includes('?')? myvariable : "Any questions?");

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console


// let str = "I am looking for jr. dev positions."
// console.log( str.replaceAll('jr. dev', 'software engineering'));


// let facts = "My name is Tim and I am a jr. dev. As a jr. dev I am specialized in full stack web development"
// console.log(facts.replaceAll('jr. dev', 'software engineer'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let random = Math.random(); // return number between 0 - 1
    if( random < 0.33){
        return 'rock'

    }else if( random < 0.66){
        return 'paper';
    }else{
        return 'scissors';
    }


}



// function rockPaperScissors () {
//     let number = Math.random();
//     console.log(number);

//     if ( number > 0.6666){
//         return 'rock'
//     }
//     else if ( number > 0.3333) {
//         return 'paper'
//     }
//     else{
//         return 'scissors'
//     }

// }

// console.log(rockPaperScissors());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice){
    let botChoice = rockPaperScissors();

    if( playerChoice === 'rock' && botChoice === 'scissors' || playerChoice === 'paper' && botChoice === 'rock' || playerChoice === 'scissors' && botChoice === 'paper'){
        console.log('Winner Winner, chicken dinner')
    }else if ( playerChoice === botChoice) {
        console.log('tied');
    }else{
        console.log('loseeerr');
    }
}

checkWin('paper');



// function play(choice){
//     let bot = rockPaperScissors();

//     console.log(`Choice: ${choice} Bot:${bot}`);

//     if (choice === 'rock' && bot === 'paper' || choice === 'paper' && bot === 'scissors' || choice === 'scissors' && bot === 'rock' ){
//         return `${choice} is beat by ${bot}. You lose.`;
//     }
//     else if (choice === 'rock' && bot === 'scissors' || choice === 'paper' && bot === 'rock' || choice === 'scissors' && bot === 'paper' ){
//         return `${choice} beats ${bot}. You win!`;
//     }
//     else if (choice === bot){
//         return 'draw';
//     }
    
// }

// console.log(play('rock'));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

// function arrayThief (arr){
//     for x in arr
//         return
// }

// let sampleArr = ['rock', 'paper', 'scissors']

// arrayThief(sampleArr); 



// function x (arr) {
//     arr.sort((a, b) => a - b );
//     alert(arr[1] + arr[arr.length - 2])
// }

// x([2, 3, 1, 5, 4])