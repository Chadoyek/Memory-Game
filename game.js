
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];


var userClickedPattern = [];

let level = 0

const title = $("h1");

var started = false;


$(".btn").click(function() {


  var userChosenColour = $(this).attr("id");


  userClickedPattern.push(userChosenColour);


    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

});

function nextSequence() {

    userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


    playSound(randomChosenColour);

    level++;
    title.text("Level " + level);



}


function playSound(name){

    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();

}

function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    
    },20)

}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else {

        var wrongAudio = new Audio ("sounds/wrong.mp3");
        wrongAudio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        
        },200)

        title.text("Game Over, Press Any Key to Restart")
        
        startOver();

    }
console.log(userClickedPattern)
console.log(gamePattern)

}

$(document).keypress(function(){
    if(!started){
        nextSequence();
        started = true;
    }
})

function startOver(){
    const savedHighestLevel = localStorage.getItem('highestLevel');
    if (savedHighestLevel === null || level > parseInt(savedHighestLevel)) {
        localStorage.setItem('highestLevel', level);
        title.text("New High Score! Level " + level);
    }
    level = 0;
    gamePattern = [];
    userClickedPattern = []
    started = false;

}


console.log(level)
console.log(gamePattern)
console.log(userClickedPattern)
