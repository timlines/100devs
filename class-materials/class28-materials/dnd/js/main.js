//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.subclasses);
       
        data.subclasses.forEach( obj => {
            console.log(obj.name)
            // create an li
            const li = document.createElement('li');
            // add text to li
            li.textContent = obj.name
            //apend the li to the ul 
            document.querySelector('ul').appendChild(li);
      })

       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// get the sub classes showing up in the dom

// Wizard 