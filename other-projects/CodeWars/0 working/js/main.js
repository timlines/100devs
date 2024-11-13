// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let result = '';
    
    let arr = x.split('')
    arr.forEach(element => {
        element < 5 ? result += 0 : result += 1;
        
    });

    return result;
}


console.log(fakeBin('123456789'));
// '123456789' -> '000011111' 


// function fakeBin(x) {
//     return x.split('').map(n => n < 5? 0: 1).join('');
// }