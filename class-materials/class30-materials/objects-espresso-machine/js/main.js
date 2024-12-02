//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
 

// class EspressoMachine {
//     constructor(color, make, model, price){
//         this.color = color
//         this.make = make
//         this.model = model
//         this.price = price
//     }  

//     turnOn(){ 
//         console.log('Good day, I am now on!');
//     }
//     steam(){ 
//         console.log('ITTSSS SUMMERRR SALLLEEEE 60%%%%');
//     }
//     brew(){ 
//         console.log('Good stuff comin your way');
//     }
//     }
    



// let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 400 )



// let hourlyRate =250;
// let hours = 160
// let taxRate = .35

// function calculateProfit(rate, numOfHours, taxes){
//     return rate * numOfHours * (1 - taxes)
// }

// function holdForTaxes(profitMade){
//     return hourlyRate * hours - profitMade
// }

// let profit = calculateProfit(hourlyRate, hours, taxRate)

// let taxesHeld = holdForTaxes(profit)

// console.log(profit);
// console.log(taxesHeld)


// let seriousBusinessPerson = {
//     hourlyRate: 250,
//     hours: 160,
//     taxRate: .35,
//     calculateProfit: function() {
//         return this.hourlyRate * this.hours * (1 - this.taxRate)
//     }
//     calculateTaxesHeld: function() {
//         return this.hourlyRate * this.hours - this.calculateProfit()
//     }
// }

//---------------------------------------------------------

// function AgencyContractor(hourlyRate, hours, taxRate){
//     this.hourlyRate = hourlyRate
//     this.hours = hours
//     this.taxRate = taxRate
//     this.calculateProfit = function() {
//         return this.hourlyRate + thishours * (1 - this.taxRate)
//     }
//     this.invoiceClient = function(){
//         return `Your invoice total is ${this.hourlyRate * this.hours}`
//     }

//     let leon = new AgencyContractor(250,160,.35)
//     console.log( leon.invoiceClient() )
//     console.log( leon.hourlyRate )
//     console.log( leon.calculateProfit() )
// }

//----------------------------------------------------------------

function AgencyContractor(hourlyRate, hours, taxRate){
    
    this.hours = hours
    this.taxRate = taxRate
    let rate = hourlyRate // uses Let
    
    let calculateProfit = function() {
        return this.hourlyRate + thishours * (1 - this.taxRate)
    }
    this.invoiceClient = function(){
        return `Your invoice total is ${this.hourlyRate * this.hours}`
    }

    let leon = new AgencyContractor(250,160,.35)
    console.log( leon.invoiceClient() )
    console.log( leon.hourlyRate )
    console.log( leon.calculateProfit() )
}

//--------------------------------------------------------------

// break code down into smaller managable chunks.

