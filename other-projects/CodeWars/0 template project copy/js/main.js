function subtractSum(n){

    // data validation n >= 10 and n < 10000

    if (n >= 10 && n < 10000){
        // Sum all the digits of n
        let sum = 0;
        let numString = n.toString();

        for (let i = 0; i < numString.length; i++) {
            sum += parseInt(numString[i]);
        }

        return sum;

        // Subtract the sum from n, and it is your new n

        // if the new n is in the list below return back to task 1 until you find the first n in the list below
    }

    //if(false){

    else{
        return console.log('not in the list');
    }

    return // fruit name like "apple"
    // if not in the list return "not in the list"
}


subtractSum(325);


subtractSum(10);


// 10 , 1, 1 + 0 = 1, 10 - 1 = 9
//return appple 