//Write your pseduo code first! 


//get input
document.querySelector("#check").addEventListener('click', mySteps);


function mySteps () {
    const celcius = document.querySelector('#input').value;
    
    const fahrenheit = (celcius * 9/5) + 32.000;    
    
    document.querySelector('#output').innerText = `${celcius}° C = ${fahrenheit}° F`;  
    

}

//convert temp
// F = (0C * 9/5) + 32
// C = (F - 32) / 9/5


//output result