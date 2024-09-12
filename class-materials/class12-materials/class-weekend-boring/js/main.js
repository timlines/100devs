document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  
  let tuesday = /tuesday/i;
  let thursday = /tuesday/i;
  let saturday = /saturday/i;
  let sunday = /sunday/i;

  //Conditionals go here

  if ( day.match(tuesday) || day.match(thursday)){
      document.querySelector('#placeToSee').innerText = "Class."
  }

  else if ( day.match(saturday) || day.match(sunday)){
    document.querySelector('#placeToSee').innerText = "Weekend."
  } 

  else  {
    document.querySelector('#placeToSee').innerText = "Boring."
  }  


}
