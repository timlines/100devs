// const circle = new Circle(10);


// circle.location = { x: 1};

// const propertyName = 'center location';
// circle.[propertyName] = { x: 1 };

// delete circle.['location'];
// ----------------------------------------------

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const circle = new Circle(10);

// for (let key in circle) {
//   if ( typeof circle[key] !== 'function')
//   console.log(key, circle[key]);

// }

// const keys = Object.keys(circle);
// console.log(keys);


// if ('radius' in circle)
//   console.log('Circle has a radius.');


// ----------------------------------------------------

// function Circle(radius) {
//   this.radius = radius;

//   this.defaultLocation = { x: 0, y: 0 };

//   this.computeOptimumLocation = function(factor) {

//   }

//   this.draw = function() {
//     this.computeOptimumLocation();

//     console.log('draw');
//   }
// }

// const circle = new Circle(10);

// circle.computeOptimumLocation();
// circle.draw();


// ----------------------------------------------------------

// function Circle(radius) {
  
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   let computeOptimumLocation = function(factor) {

//   }

//   this.draw = function() {
//     let x, y;


//     computeOptimumLocation(0.1);

//     console.log('draw');
//   }
// }

// const circle = new Circle(10);

// circle.draw()


//--------------------------------------------------------------


// function Circle(radius) {
  
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };


//   this.getDefaultLocation = function(){
//     return defaultLocation;
//   }

//   let computeOptimumLocation = function(factor) {

//   }

//   this.draw = function() {
//     computeOptimumLocation(0.1);

//     console.log('draw');
//   }

//   Object.defineProperty(this, 'defaultLocation', {
//     get: function() {
//       return defaultLocation;

//     },
//     set: function(value){
//       if ( !value.x || !value.y ){
//         throw new Error ('Invalid location.');
//       }

//       defaultLocation = value;
//     }
//   });

// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw()

// ---------------------------------------------------------

//===========
// Exercise
//===========

// Create a stopwatch object. 
// This object has a few options, 
// duration, a property
// reset
// start
// stop

// if stopwatch has started it should warn the user it can't start again. Neither can it call stop twice.



// const sw = new Stopwatch(){

// }



