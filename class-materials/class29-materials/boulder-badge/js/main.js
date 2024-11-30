// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

let bulbasaur = 16 - 5
let caterpie = 7 - 1
let weedle = 7 - 1
let totalCandies = bulbasaur + caterpie + weedle;

console.log(`Bulbasaur: ${bulbasaur}\nCaterpie: ${caterpie}\nWeedle: ${weedle}\nTotal Candies: ${totalCandies}`)

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function fahrenheitToCelcius(fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}

// function fahrenheitToCelcius(fahrenheit){
//     let celcius = (fahrenheit - 32_ * 5/9;
//     return celcius;
//     )
// }

console.log(fahrenheitToCelcius(20));

function battleCharmander(fahrenheit){
    return fahrenheitToCelcius(fahrenheit) > 0;

}

console.log(battleCharmander(33));

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function iChooseYou(x){
    
    for ( let i = 0; i < x; i++){
        console.log('Pikachu I choose you!');
    }
}

iChooseYou(10);




// let numberOfPokemon = 10;

// while( numberOfPokemon > 0){
//     console.log("Pikachu I choose you")
//     numberOfPokemon --;
// }

