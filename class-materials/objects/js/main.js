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

function Circle(radius) {
  
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function(factor) {

  }

  this.draw = function() {
    let x, y;


    computeOptimumLocation(0.1);

    console.log('draw');
  }
}

const circle = new Circle(10);

circle.draw()


//--------------------------------------------------------------





