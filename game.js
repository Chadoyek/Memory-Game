const gamePattern = [];



function nextSequence(){
    const numbers = [0, 1 , 2 , 3];

    const randomNumber = Math.floor(Math.random() * numbers.length);

    const buttonColours = ["red", "blue", "green", "yellow"];

    const randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour)


    return randomChosenColour;

}


const log = nextSequence();

console.log (log);

console.log(gamePattern)