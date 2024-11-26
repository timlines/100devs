// let player = {
//     age: 99, 
//     name: 'ABC',
//     isActive: true,
//     outfit: {
//         color: 'blue',
//         size: 'M',
//         cost: 100,
//         isNew: true
//     }
// };

// console.log(player);


// player.isActive = false;

// player.health = 100;

// delete player.health;

// console.log(player.outfit.color);



// player.outfit.size = 'S';



//virtual pet

//stats, health fun.


//Actions, eat apple, eat candy, play


// let player = {
//     health: 100,
//     fun: 0,
//     eatApple: function(){
//         this.health += 10;
//         console.log('eat apple');
//         console.log(this.health);
//     },
//     eatCandy: function(){
//         this.health -= 5;
//         this.fun += 5;
//         console.log('yum candy')
//         console.log(this.health);
//         console.log(this.fun);
//     },
//     play: function(){
//         this.fun += 10;
//         console.log('Weeeee');
//         console.log(this.fun);
//     },
//     eat: function(food){
//         if(food == 'apple'){
//             this.health += 10;
//         }
//     }




// };


// console.log(player);


// function sendSignal(){
//     console.log('HELP!');

// }

// let i = 0;

// while(  i < 1000){
//     // do something
//     sendSignal();
//     i++;
// }



// let result = 0;

// let j = 1;

// while ( j <= 10){
//     result = result + j;
//     console.log(result);
//     j++;
// }



// let fuel = 1000;
// let distance = 0;

// while(fuel > 0 ){
//     distance++;
    

//     if (distance >= 100 && distance < 200){
//         continue;
//     }

//     fuel--;

//     if(distance == 500){
//         break;
//     }
// }

// console.log(distance);


// If the current population is 100 and it increases by 5% each year, what will the population be in 10 years?


// let population = 100;

// population = population * 1.05;
// population *=1.05;


// let i = 0;
// while ( i < 10){
//     population *= 1.05;
//     i++;
// }


// let population = 100;

// for ( let i = 0; i < 10; i++){
//     population *=1.05;
// }

// console.log(population);

// let database = [];

let sign = document.getElementById('sign');
console.log(sign);

// 2. Modify

 sign.textContent = 'Welcome, Travelers!'

 console.log(sign.textContent);


//  sign.innerHTML = '<p>hello</p>

sign.style.color = 'blue';