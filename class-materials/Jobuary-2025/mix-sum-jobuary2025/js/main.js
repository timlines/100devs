// given an array of integers as strings and number, return the sum of the array values as if all were numbers.

// Return your answer as a number. 

//[] all have value: nums/str/; pos/whole; nofuny biz

// num -> 

function sumAllValues(arr){
  
  // loop arr - sum all values

  // reduce -> acc add curr convert current to a number and then add

  return arr.reduce( (a, c) => a + Number(c), 0);
}

console.log(sumAllValues([9, 3, '7', '3']), 22)
console.log(sumAllValues(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)

