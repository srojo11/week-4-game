




$(document).ready(function() {

var wins = 0;
var losses = 0;
var userScore = [];
var computerNum = 0;
var counter = 0;



/* generated random nubmers on click */
$("#start").on("click", function(){

/* variables */
var computerGuess = Math.floor(Math.random() * 120) + 19;
var crystalOne  = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree  = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;


var userScore = [];
var computerNum = 1;
var counter = 0;


/* generated random  pushed to div*/
computerNum = computerGuess;
$("#random-box").text(computerGuess);


/* Button 1 */
$("#crystal-1").on("click", function(){
counter += crystalOne; 
userScore.push(counter);
$("#user-score").text(counter);

/* if user total equals computer number then update variables */
if (counter === computerNum){
wins++;
counter = 0;
userScore = [];


}
/* if user is greater than comupter number then update variables and reset user score*/
else if (counter >= computerNum) {
losses ++;
counter = 0;
userScore = [];

}


console.log(crystalOne)


		});

/* Button 2 */
$("#crystal-2").on("click", function(){
counter += crystalTwo; 
userScore.push(counter);
$("#user-score").text(counter);


/* if user total equals computer number then update variables */
if (counter === computerNum){
wins++;
counter = 0;
userScore = [];


}
/* if user is greater than comupter number then update variables and reset user score*/
else if (counter >= computerNum) {
losses ++;
counter = 0;
userScore = [];

}



console.log(crystalTwo)


		});

/* Button 3 */
$("#crystal-3").on("click", function(){
counter += crystalThree; 
userScore.push(counter);
$("#user-score").text(counter);


/* if user total equals computer number then update variables */
if (counter === computerNum){
wins++;
counter = 0;
userScore = [];




}
/* if user is greater than comupter number then update variables and reset user score*/
else if (counter >= computerNum) {
losses ++;
counter = 0;
userScore = [];


}

console.log(crystalThree)



		});



/* Button 4 */
$("#crystal-4").on("click", function(){
counter += crystalFour; 
userScore.push(counter);
$("#user-score").text(counter);


/* if user total equals computer number then update variables */
if (counter === computerNum){
wins++;
counter = 0;
userScore = [];




}
/* if user is greater than comupter number then update variables and reset user score*/
else if (counter >= computerNum) {
losses ++;
counter = 0;
userScore = [];



}


console.log(crystalFour)

		});


console.log(userScore)

var html = 

"<p>Wins: " + wins + "</p>" + "<br/>" +
"<p>Losses: " + losses + "</p>";

document.querySelector("#counter").innerHTML = html;



	});



});


/* if (computerNum !== userNum)

$("#crystal-1").on("click", function(){
var crystalNum = Math.floor(Math.random() * 12) + 1;
crystalOne += crystalNum;
$("#random-box").push(crystalOne);

console.log(crystalOne)
});*/



