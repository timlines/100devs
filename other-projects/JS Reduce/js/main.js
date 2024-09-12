const nums1 = [1, 2, 3, 4, 5];

// // add up the number in the array

// let sum = 0;

// for (let i = 0; i < nums1.length; i++){
//     //add this value to the accumulator
//     sum = sum + nums1[i];
// }
// console.log('sum: '+  sum);

// nums1.reduce(
//     (acc, curValue)=>acc{
//     console.log('acc' + acc);
//     console.log('curValue' + curValue);
// }, 0 );


// const total = nums1.reduce(
//     (acc, curValue)=> acc + curValue, 0
// );

// console.log(total);

// const letters = ["M", "I", "M", "O"];

// const word = letters.reduce((acc, curVal)=> acc + curVal, "");
// console.log('word', word);

// const nums2 = [10, 17, 8, 22, 5, 12];

// const largest = nums2.reduce((max, curVal)=>{
//     // console.log('curVal', curVal);
//     // if (curVal > max){
//     //     return curVal;
//     // }

//     // console.log('max', max);

//     // return max;

//     return curVal > max? curVal : max;

// }, 0);

// console.log('largest', largest);



// const shoppingList = [
//     {
//       name: "milk",
//       price: 2,
//       category: "food",
//     },
//     {
//       name: "bread",
//       price: 1.8,
//       category: "food",
//     },
//     {
//       name: "soap",
//       price: 5,
//       category: "cleaning",
//     },
//     {
//       name: "cheese",
//       price: 4,
//       category: "food",
//     },
//     {
//       name: "bleach",
//       price: 6,
//       category: "cleaning",
//     },
//   ];

//   const mostExpensive = shoppingList.reduce((highestPrice, curItem)=>{
//     console.log('curItem', curItem.price);
//     return curItem.price > highestPrice ? curItem.price : highestPrice;
//   }, 0);
//   console.log('mostExpensive', mostExpensive);

//   const categories = shoppingList.reduce((catList, curItem)=>{
//     //check if curItem categorgy is in catList
//     console.log('cat', curItem.category);
//     if(!catList.includes(curItem.category)){
//         catList.push(curItem.category);
//     }
//     console.log('catList', catList);
//     return catList;
//   }, []);


//use reduce to count how many people voted

//let count = 0

const voters=[
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age:43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  
  ];

// const numVoted = voters.reduce((count, curItem)=>{
//     console.log('count', count);
//     //need to return the update
    
//     //deterimne if count gets updated
//     if (curItem.voted){
//         //update the count
//         return ++count; 
//     }
//     // have to return the updated value
//     return count; 
// }, 0 );


const votenum = voters.filter(item => item.voted).length;
console.log('votenum', votenum);




