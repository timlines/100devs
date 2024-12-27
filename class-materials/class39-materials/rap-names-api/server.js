const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chanceler Bennet',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthlocation': 'unkown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})


app.get('/', (request, response) => {
    
})

app.get('/api/:name', (request, response) => {
    
    const rapperName = request.params.name.toLowerCase();

    console.log(`Log: ${request.params.name}`);
    // response.json(rappers);

    if ( rappers[ rapperName ]){
        response.json(rappers[rapperName].birthName);
    }else {
        response.json(rappers['unknown'])
    }
    
    // const rapperName = request.params.name.toLowerCase();
    // if(rappers[rappersName]){
    //     response.json(rappers[rapperName])
    // }else{
    //     response.json(rappers['Unknown'])
    // }

 
    
})


app.listen( PORT, () => {
    console.log(`The server is running on ${PORT}! You better go catch it!`)
} )