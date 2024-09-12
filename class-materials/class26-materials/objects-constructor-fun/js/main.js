//Create a constructor with 4 properies and 3 methods


function PizzaMachine(size, toppings, crust, sauce){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce

    this.estimatedDelieveryTime = function(){
        console.log('calucalting...')
    }
    this.burnMouth = function(){
        console.log('fjkjfjfkjfkjkf');
    }
    this.frisbee = function(){
        console.log('YeeeeeEEEEt');
    }
}


let pizza = new PizzaMachine('large', ['spinach','galic'], 'deep dish', 'white')



class MakeCar{
    constructor(s, y, z){

    }
    honk(){

    }
}




fetch("https://dog.ceo/api/breed/image/random")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

