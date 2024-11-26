function countPositivesSumNegatives(input) {
    // your code here
    let positives = input.filter((number) => number > 0)
    let sumPositives  = positives.length;
    
    let negatives = input.filter(( num ) => num < 0)
    let sumNegatives  = negatives.reduce(( a, b) => a + b, 0);
    
    console.log( [sumPositives, sumNegatives]);
    
    return [sumPositives, sumNegatives];

}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));