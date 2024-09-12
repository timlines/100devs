// // *Variables*
// // Declare a variable, reassign it to your favorite food, and alert the value


// let food = 'Dominos'; 

// food = 'Vegan Pho';
// alert(food);

// //Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

// let word = "My string of random text"

// alert(word[1]);


// alert(word.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function cal3Numbers(x, y, z){
    alert(x/y * z);
}

function divideAndMulti(n1, n2, n3){
    let prod = (n1/n2) * 3;
    alert(prod);
}

divideAndMulti(12, 3, 4)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNumber(x){
    console.log(Math.cbrt(x));
}
oneNumber(4);


function cubeRootIt(robot){
    console.log( Math.cbrt(robot).toFixed(4));
}
cubeRootIt(15);


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function giveMonth(month){
    
    let summerMonths = ['June', 'July', 'August']

    for (let i = 0; i < summerMonths.length; i++){
        if(month === summerMonths[i]){
            alert("Yay")
        }else {
            "Booo"
        }
    }
    
   
}

giveMonth('June');
giveMonth('May');


function checkForSummer(month){

    let monthLowerCase = month.toLowerCase()

    if(monthLowerCase === 'iune' || monthLowerCase === 'july' || monthLowerCase === 'august'){
        alert('Yay')
    }else{
        alert('Boo');
    }
}



//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function myNumber(number){
    console.log(number);
}

function skip5s(n){
    for (let i = 1; i <= n; i++){
        if ( i % 5 !== 0){
            console.log(i);           
        }
    }
}

skip5s(100);