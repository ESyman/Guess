//Start
var answer = 0; //Initalize answer to 0
var guess = 0; //Initalize guess to 0
var turns = 1; //Initalize turns to 0
var games = 0; //Intalize games to 0
var totalTurns = 0; //Initalize totalTurns to 0
var averageTurns = 0; //Initalize averageTurns to 0
var writtenAnswer = false; //Initalize writtenAnswer to false
var correct = false; //Initalize correct to false
writtenAnswer = prompt("Welcome to the guessing game. Do you want to play it? (Type in 'Yes' or 'Y' to continue; any other choice will quit the game.)");
  if (writtenAnswer == "yes" || writtenAnswer == "Yes" || writtenAnswer == "Y" || writtenAnswer == "y") { //If writtenAnswer is equal to "yes", "Yes", "Y", or "y"... no other answer works unless you want to quit the game.
    var playGame = true; //Initalize playGame to true, sets it in a loop.
  }
while (playGame == true) {
  games++ //increments games by 1.
  alert("This is game "+games+"!");
  answer = (Math.floor(Math.random()*100))+1; // set answer to to random number between 0 and 1, multiply by 100, convert to integer, add 1
  console.log(answer);
  while (correct == false) {
    var guess = parseInt(prompt("Guess a number from 1 to 100!"));
    turns++; //Adds 1 to turns.
    if (isNaN(guess)){ //If the variable isn't a number... If it is, skip this and go to the next code. note: find a way for it to differ an invalid variable and pressing the cancel button.
      alert("That's not a valid integer! This will not count as a turn.");
      turns--; //Subtract 1 from turns.
    }
    else { //Note: add how to check if an integer is between a set of numbers.
      if (guess == answer) {
        var correct = true; //Set correct to true to get out of the loop.
    }
      else {
        if (guess > answer) {
          alert("Your guess is too high! Try again.");
        }
        else {
          if (guess < answer)
            alert("Your guess is too low! Try again.");
        }
      }
    }
  }
  totalTurns = totalTurns+turns; //sets totalTurns to itself plus turns.
  averageTurns = totalTurns/games; //sets averageTurns to totalTurns divided by games.
	alert("Congratulations! That's correct! The answer was "+answer+" and you guessed it within "+turns+" turn(s)! So far, you have made "+totalTurns+" turn(s) and have had an average of "+averageTurns+" turn(s) in "+games+" games!");
  turns = 1; //sets turns back into 1.
  var writtenAnswer = prompt("Do you want to play again? (Type in 'Yes' or 'Y' to continue; any other choice will quit the game.)");
  if (writtenAnswer == "yes" || writtenAnswer == "Yes" || writtenAnswer == "Y" || writtenAnswer == "y") { //If writtenAnswer is equal to "yes", "Yes", "Y", or "y"... no other answer works unless you want to quit the game.
    correct = false; //sets the correct boolean to false so it doesn't immeditely end the next game.
    writtenAnswer = false; //resets writtenAnswer.
    guess = 0; //reset guess in case the rare chance of it being the same as the next answer happens.
  }
  else {
    alert("Thank you for playing.");
    writtenAnswer = false; //resets writtenAnswer.
    playGame = false; //stops the game loop.
  }
}
