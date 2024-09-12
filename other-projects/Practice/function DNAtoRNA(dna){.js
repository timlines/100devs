function DNAtoRNA(dna){
    return dna.replaceAll('t', 'u');
}

console.log(DNAtoRNA('tttt'));