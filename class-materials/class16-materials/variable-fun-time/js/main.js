//--- Easy
//create a variable and assign it a number

let num = 1;

//minus 10 from that number

num  = num - 10;

//print that number to the console

console.log(num);

//--- Medium
//create a variable that holds a value from the input

userInput = document.querySelector("#danceDanceRevolution").value;
console.log(userInput);

//add 25 to that number

userInput = userInput + 25;


//alert that number

alert(userInput);


//--- Hard
//create a variable that holds the h1

const h1Holder = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables

h1Holder.addEventListener('click', sum);

function sum(){
    let userInput = document.querySelector('#danceDanceRevolution').value;
    console.log(num + Number(userInput));
}