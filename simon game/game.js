
var buttonColours=["red", "blue", "green", "yellow"];

var userClickedPattern=[];
var gamePattern=[];

var started=false;
var level=0;

//to start game
$(document).keypress(function(){
    //if start is false then run if conditon
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

//userpattern 
$(".btn").click(function(){
  
    var userChosenColour= $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    
    //function for sound and animation when user press button
    playsound(userChosenColour);
    animationpress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

//to check answer
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function (){
                nextSequence();
            },1000);
        }

    }else{
        console.log("wrong");

        playsound("wrong");

        //function for adding background colour red for instance
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        //to restart game
        startOver();
    }
}    

//random pattern
function nextSequence()
{
//make userclickedpattern 0 after each level complete;
userClickedPattern = [];
level++;
$("#level-title").text("Level " + level);

var randomNumber=Math.floor((Math.random()*4));   
var randomChosenColour=buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

playsound(randomChosenColour);

// $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

// var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
};

//sound function
function playsound(name){
    $("#"+name).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animationpress(name){

    //addind css that have glow and grey tone
    $("#"+name).addClass("pressed");

    setTimeout(function(){
        $("#"+name).removeClass("pressed");
    },100);
    }
    
   
//restart function
function startOver(){
    level =0;
    gamePattern=[];
    started=false;
}