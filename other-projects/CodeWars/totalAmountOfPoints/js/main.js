// function points(games) {
    
//     let score = 0;
    
//     for ( let i = 0; i < games.length; i++){
//         let match = games[i]
        
//         let x = Number(match[0]);
//         let y = Number(match[2]);

//         if ( x === y ){ 
//             score += 1;
//         } else if ( x > y ) {
//             score += 3;
//         }

//     }

//     return score;

// }








const points = games => games.reduce((output, current) => {
    return output += current[0] > current[2] ? 3 : current[0] === current [2] ? 1 : 0 ; 
}, 0)

const championship1 = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];
console.log(points(championship1));

