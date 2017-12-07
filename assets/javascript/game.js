var alpha = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];

var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var userGuess = null;

document.onkeyup = function(event) {
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var compLetter = alpha[Math.floor(Math.random() * alpha.length)];
	console.log(compLetter);

	guessSoFar.push(userGuess);

	if (userGuess == compLetter){
		wins++;
		guessLeft = 9;
		guessSoFar.length = 0;
	}
	else{
		guessLeft--;
	}

	if (guessLeft == 0) {
		losses++;
		guessLeft = 9;
		guessSoFar.length = 0;
	}
	else{}

	var html =
		"<h3>Wins: " + wins + "</h3>" +
		"<h3>Losses: " + losses + "</h3>" +
		"<h3>Guesses Left: " + guessLeft + "</h3>" +
		"<h3>Your Guesses so far: " + guessSoFar + "</h3>";

	document.querySelector("#game").innerHTML = html;
};