$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-default btn-lg btn-block start-button' href='#' role='button'>Start!</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	
	generateHTML();

	timerWrapper();

}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000); 
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-default btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var correctAnswers = ["B. Kronos", "A. Dionysus", "A. Phobos & Deimos", "D. Maia", "C. Apollo & Artemis", "A. Troy", "B. Heracles", "C. 10"];
var questionCounter = 0;
var selecterAnswer = [];
var theClock =[];
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

var questionArray = [
		"Who did Zeus overthrow to claim his throne as King of the Gods?", 
		"Who was known as the twice-born god?", 
		"Who accompanied the God of War, Ares, into battle?", 
		"Who was the mother of Hermes, the messenger god?", 
		"Who were the twin Olympians?", 
		"What side of the Trojan War was Apollo on?", 
		"Who slayed the dragon, Ladon?", 
		"How many years did it take for Odysseus to return home?"
		];

var answerArray = [
		["Gaea", "Kronos", "Hyperion", "Thanatos"], 
		["Dionysus","Dolos","Amphitrite","Macaria"], 
 		["Phobos & Deimos", "Enyo & Nike", "Nike & Eris", "Athena & Otrera"], 
 		["Semele","Hera","Leto","Maia"], 
 		["Hypnos & Thanatos", "Enyo & Ares", "Apollo & Artemis", "Phobos & Deimos"],
  		["Troy","Greece","Neutral", "Thrace"],
  		["Perseus", "Heracles", "Theseus", "Bion"],
  	  	["15","25","10","2"]
  	  	];



