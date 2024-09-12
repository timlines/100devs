//Write your pseduo code first! 


//get temp from user input
document.querySelector("#check").addEventListener('click', run)
//convert tempture and output tempurature

function run() {
    const c = document.querySelector('#temp').value;
    const f = (c * 9/5) + 32;
    
    document.querySelector('#place').innerText = f;
}