const movies2 = ['The Wolf of Wall Street', 'Zootopia', 'Babysitting', 'Monty Python and the Holy Grail'];

const movies = ['Alien', 'Elf', 'Bambi'];


// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// }

movies.forEach(movie => console.log(movie));

let bestRappers2020 = ['Dylan', 'Polo G', 'Rapper 3'];

let bestRappersAllTime = bestRappers2020.map( Dylan => 'Dylan')

console.log( bestRappersAllTime);