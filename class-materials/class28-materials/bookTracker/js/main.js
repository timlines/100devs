//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h3').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  // Example ISBN: 0385472579
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        console.log(data.title);

        // put title into local storage
        
        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title);
          
        }else{
          let books = localStorage.getItem('books') + ' ; ' + data.title;
          localStorage.setItem('books', books);
          
        }
        
        
        document.querySelector('h3').innerText = localStorage.getItem('books')



        
       
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

