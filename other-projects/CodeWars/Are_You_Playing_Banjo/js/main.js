// Create a function which answers the question "Are you playing banjo?"

// If you name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and retrun on e ofthe following strings:

// name + " plays banjo"
// name + " does not play banjo"

// names given are always valid strings


// function areYouPlayingBanjo(name){
    
//     if (name[0] === 'R' || name[1] === 'r'){
//         //plays banjo


//         return `${name} plays banjo`
//     }else{
//         //doesn't play
//         return `${name} does not play banjo`

//     }
    
// }

// console.log(areYouPlayingBanjo('joe'));


// areYouPlayingBanjo('bob') -> Bob does no play banjo
// areYouPlayingBanjo('rob')

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : 'does not play') + ' banjo';
}

console.log(areYouPlayingBanjo('rob'));