
var player1=Math.floor(Math.random()*6+1);

var randomimage1="images/dice"+player1+".png";

//player 2

var player2=Math.floor(Math.random()*6+1);

var randomimage2="images/dice"+player2 +".png";     

//var randomimagesrc2="images/"+ randomimage2;


var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimage1);

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomimage2);


if(player1>player2){
    document.querySelector("h1").innerHTML="🌹Player 1 wins!!";
    console.log("Player 1 wins!");
}
else if(player1<player2){
    document.querySelector("h1").innerHTML="🌹Player 2 wins!!";
   console.log("Player 2 wins!");
}
else{
    document.querySelector("h1").innerHTML="Draw😒!!";
    console.log("Draw!");
}
