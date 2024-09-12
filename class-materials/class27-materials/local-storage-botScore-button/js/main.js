//Create a button that adds 1 to a botScore stored in localStorage 


//localStorage.setItem('bestfriend', 'bob')

if( !localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)

}


document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){
    let botScoreVal = Number(localStorage.getItem('botScore'));
    botScoreVal += 1;
    localStorage.setItem('botScore', botScoreVal);

    

 
}


// const choice = document.querySelector('input').value
// const url = `https://api.nasa.gov/planetary/apod?api_key=0OLViIzVfeARpqybM4QppUeoaMG4071FoAhYRTg1`

// fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
