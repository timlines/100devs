//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

// function tonyHawk(skateboard, speed, health, foot){



// this.skateboard = 'nexus';
// this.speed = 'fast';
// this.health = '99';
// this.foot = 'goofy';

// }


function TonyHawkCharacter(chName, chStance, chSponsor, chMove){
    this.characterName = chName
    this.stance = chStance
    this.sponsor = chSponsor
    this.specialMove = chMove
    this.flip = function(){
        console.log('Kickflip!!')
    }
    this.taunt = function(){
        console.log(`Don't make me use my ${this.specialMove}`)
    }
    this.grab = function(){
        console.log('Melon grabbb')
    }
}

let kareemCampbell = new TonyHawkCharacter('Kareem', 'Goofy', 'Element', 'Ghetto Bird');