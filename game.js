const gamePattern = [];



function nextSequence(){
    const numbers = [0, 1 , 2 , 3];

    const randomNumber = Math.floor(Math.random() * numbers.length);

    const buttonColours = ["red", "blue", "green", "yellow"];

    const randomChosenColour = buttonColours[randomNumber];
    

    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeIn(20).fadeOut(20).fadeIn(20);


    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();

    
}



$(".btn").click(function(){
    const userChosenColour = $(this).attr("id");
    alert("you clicked " + userChosenColour)
})

