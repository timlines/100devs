/* Write a function to convert a name into initials. This kata strictly
takes two words with one space in between them. */

function abbrevName(name){
    
    let names = name.split(' ');
    
    // count the elements in an array

    // for each element in the array pull the initial

    let initials = `${names[0][0]}. ${names[1][0]}.`
        
    return initials


}

let result = abbrevName('Sam Harris');

console.log(result);