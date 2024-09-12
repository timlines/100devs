//Create a conditonal that checks their age

function getAge() {
    return document.querySelector('#danceDanceRevolution').value;
}

function checkAge() {
    let age = getAge();
    let result = "";
    
    //If under 16, tell them they can not drive
    if(age < 16){
        result = "You can't drive"
            }

    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if (age < 18){
        result = 'You can\'t hate from outside the club, because you can\'t even get in';
        
    }
    //If under 21, tell them they can not drink
    else if (age < 21){
        result = "You can not drink";
        
    }
    //If under 25, tell them they can not rent cars affordably
    else if (age < 25){
        result = "You can not rent cars affordably";
        
    }
    //If under 30, tell them they can not rent fancy cars affordably
    else if (age < 30){
        result = "You can not rent fancy cars affordably";
    }
    //If under over 30, tell them there is nothing left to look forward too
    else {
        result = "You have nothing left to look forward to";
    }

    console.log(result);
    return result;
}


//--- Harder
//On click of the h1

document.querySelector('h1').addEventListener('click', run);

//Take the value from the input
//Place the result of the conditional in the paragraph

function run(){
    userInput = getAge();
    console.log(userInput);
    result = checkAge();
    document.querySelector('p').innerText = "You are " + userInput + ". " + result;
}

