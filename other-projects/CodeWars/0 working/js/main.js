function sumSecondLowAndHigh (arr) {
    let sorted = arr.sort((a , b) => a - b)
    return sorted[1] + sorted[sorted.length - 2];
}

console.log(sumSecondLowAndHigh([ 2, 3, 1, 5, 4 ])); // -> 6 = 2 + 4