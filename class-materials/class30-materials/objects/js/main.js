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

// function Stopwatch() {
//   this.duration = 1; 
//   this.reset = 2;
//   let defaultStart = false;
//   this.start = function (){
    
//     if ( !defaultStart ){
//       this.defaultStart = true;
//       console.log('Starting...');
//     }else {
//       console.log('The timer is already running.')
//     }
//   };


// Object.defineProperty(this, 'defaultStart', {
//   get: function() {
//     return defaultStart;
//   },
//   set: function(value) {
//     if ( value ){
//       throw new Error('Timer is already running.')
//     }
    
    
//     defaultStart = value;
//   }
// })



//   this.stop = 4;

// }

// const sw = new Stopwatch()


// console.log(sw.start());



function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  this.start = function(){
    if (running)
      throw new Error('Stopwatch has already started.');

    console.log('Running...')
    running = true;

    startTime = new Date();
    console.log(startTime);
  };

  this.stop = function(){
    if (!running)
      throw new Error('Stopwatch is not started.');

    console.log('Stopping...')
    running = false;

    endTime = new Date();
    console.log(endTime);

    const seconds = (endTime.getTime() -startTime.getTime()) / 1000;
    duration += seconds;

  
    console.log(`${duration} seconds`);

  };

  this.reset = function(){
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;

  }

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });

}

const sw = new Stopwatch();

