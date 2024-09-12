const synth = window.speechSynthesis;

//Check if the button has been pressed, yell
document.querySelector("#yell").addEventListener('click', run);


//after the button has been pressed, get the names.
function run() {
   const fName = document.querySelector('#firstName').value;
   const fMidName = document.querySelector('#firstMiddle').value;
   const lMidName = document.querySelector('#lastMiddle').value;
   const lName = document.querySelector('#lastName').value;

   const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`;

   document.querySelector("#placeToYell").innerText = yellText;

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}

//create a variable for all the names




//Yell the names

