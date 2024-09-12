//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter (hitpoints, attack, defense, agility){
    this.hitpoints = hitpoints
    this.attack = attack
    this.defense = defense
    this.agility = agility
    this.hit = function (){
        console.log("Hit!")
    }
    this.block = function (){
        console.log("Block!")
    }
    this.knockout = function (){
        console.log("K.O!")
    }

}


function MakeSFcharacter(punch, kick, block, catchPhrase, specialMove){
    this.punch = punch
    this.kick = kick
    this.block = block
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function () {
        console.log(`You can't handle my ${this.specialMove}`)
    }
    this.winning = function(){
        console.log(`Haha! ${this.catchPhrase}`)
    }
    this.dash = function(){
        console.log( 'Whoopp, missed me!')
    }

}

let ryu = new MakeSFcharacter('high', 'high', 'high', 'Get OVER HERE', 'HADDDDUKKKEENNN')


const doubleChar = (str) => str.split('').map(c => c + c).join('');

function stringToNumber(num){ return num.toString(); }

console.log(stringToNumber('5'));