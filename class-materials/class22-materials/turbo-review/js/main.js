// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console


let favDrink = " Root Beer ";
// console.log(favDrink);

let leonDrink = ' Diet Vanilla Coke from Friendlys ';

leonDrink.trim();

// console.log(leonDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let strOfWords = "An apple a day keeps the doctor away";

// if !== -1 it contains word

if (strOfWords.search('apple') !== -1){
    // console.log('yes')
}else{
    // console.log('no');
}



// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let random = Math.random();
    let result = '';

    if (random > 0.6666){
        result = "rock";
    }else if (random > 0.3333 ){
        result = "scissors";

    }else{
        result = "paper";
    }

    return result //rock, paper or scissors
}

// console.log(rockPaperScissors());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function myChoice(str){
    botResult = rockPaperScissors();
    result = '';

    if (botResult === "rock" && str === "paper"){
        result = "Player wins!";
    }else if (botResult === "paper" && str === "scissors"){
        result = "Player wins!";
    }else if (botResult === "scissors" && str === "rock"){
        result = "Player wins!"
    }else if (botResult === str){
        result = "Tie!";
    }else{
        result = "Bot wins!"
    }

    console.log(result);
}

// console.log(myChoice("Rock"));

function checkWin(playerChoice){
    let botChoice = rockPaperScissors();

    if (playerChoice === 'rock' && botChoice === 'scissors' || playerChoice === 'paper' && botChoice === 'rock' || playerChoice === 'scissors' && botChoice === 'paper'){
        console.log('You Win!');
    }else if(playerChoice === botChoice){
        console.log('You Tied');
    }else{
        console.log('You lose');
    }
}

// checkWin('rock');

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


function playGames(arr){
    arr.forEach(x => myChoice(x));
}
playGames(['rock', 'paper', 'scissors']);

function playGameXTimes(arr){
    arr.forEach( choice => checkWin(choice) );
}

// playGameXTimes(['rock','paper', 'scissors']);

