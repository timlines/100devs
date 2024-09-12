// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let myArr = [1, 2, 3, 4, 5]

function arrayTool(arr){
          
    firstNumber = arr[0];
    lastNumber = arr[arr.length - 1];
    
    if( firstNumber < lastNumber){
        alert('Hi');
    }else if ( firstNumber === lastNumber){
        alert("We close in an hour");
    }else{
        alert("Bye");
    }
    
}

arrayTool(myArr);

function checkFirstAndLast(arr){
    if(arr[0] < arr[arr.length - 1 ]){
        alert('Hi')

    }else if(arr [0] > arr[arr.length - 1] ){
        alert('Bye')
    }else{
        alert("We close in an hour");
    }
}


let bestColors = ['green', 'blue', 'yellow', 'black']


// bestColors.forEach((x, i) => console.log(x))

bestColors.forEach(console.log(x));

