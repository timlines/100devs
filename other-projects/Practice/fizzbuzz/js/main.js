//display numbers between 1 and 100



// it shows fizz instead if the number is divisible by 3


// it shows buzz if the number is divisiable by 5 and 3


let number = 3;


for (let i = 1; i <= 100; i++){

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0)
        console.log('Fizz');

    else if (i % 5 === 0)
        console.log('Buzz');

    else console.log(i);
    
}


