//Create a mouse object that has four properties and three methods


const mouse5 = {
    size: 'big',
    name: 'fred',
    color: 'black',
    sex: 'male',

    // function run(){
    //     console.log("RUN")
    // }
    // function jump(){
    //     console.log("RUN")
    // }
    // function eat(){
    //     console.log("RUN")
    // }

}


let mouse1 = {}

mouse1.brand = 'logitech'
mouse1.color = 'black'
mouse1.model = 'MX Ergo'
mouse1.wireless = true

mouse1.leftCligk = function(){
    console.log('LEft CLICKKKK')
}

mouse1.rightClick = function(){
    console.log('RIGH CLICKKKK')
}

mouse1.scroll = function(){
    console.log('JUMP JUMP JUMP')
}

let mouse2 = {}

mouse2.brand = 'logitech'
mouse2.color = 'black'
mouse2.model = 'Pro Wireless'
mouse2.wireless = true

mouse2.leftCligk = function(){
    console.log('LEft CLICKKKK')
}

mouse2.rightClick = function(){
    console.log('RIGH CLICKKKK')
}

mouse2.scroll = function(){
    console.log('JUMP JUMP JUMP')
}


let mouse3 = {}

mouse3.brand = 'apple'
mouse3.color = 'silver'
mouse3.model = 'magic trackpad 2'
mouse3.wireless = true

mouse3.leftCligk = function(){
    console.log('LEft CLICKKKK')
}

mouse3.rightClick = function(){
    console.log('RIGH CLICKKKK')
}

mouse3.scroll = function(){
    console.log('SLIDE TWO FINGER')
}


let Mouse = {}

this.brand = 'apple'
this.color = 'silver'
this.model = 'magic trackpad 2'
this.wireless = true

this.leftCligk = function(){
    console.log('LEft CLICKKKK')
}

this.rightClick = function(){
    console.log('RIGH CLICKKKK')
}

this.scroll = function(){
    console.log('SLIDE TWO FINGER')
}


function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function(){
        alert('BEEP BEEP')
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}

MakeCar.prototype.bluetooth = true;