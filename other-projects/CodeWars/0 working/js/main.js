function guessBlue(blueStart, redStart, bluePulled, redPulled){
    console.log(`Number of Blue Marbles: ${blueStart}`);
    console.log(`Number of Red Marbles: ${redStart}`);
    console.log(`Number of Red Pulled ${bluePulled}`);
    console.log(`Number of Blue Pulled ${redPulled}`);

    let probBlue = 0;

    probBlue = (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled));
    
    
    
    console.log(probBlue);
    return probBlue;
}


guessBlue(5, 5, 2, 3); //0.6