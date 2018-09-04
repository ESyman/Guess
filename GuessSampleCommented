var Answer = Math.round(Math.random()*100); // Generates a variable which is a non-integer, and multiplies it by 100 and rounds it up to create an integer. - generate random number btween 0 and one, multiply by 1, convert to integer with round up
var Turns=0; // Sets turns to 0. By using the word "var", you signal that it's creating a variable. You don't have to add "var" to it afterwards. - Initalize turns variable, set to 0.
var Correct=false; // Sets default state of the "Correct" boolean to false. - initalize boolean variable Correct, set to value False
Turns++; // Adds 1 to Turns. (New!Turns = Old!Turns + 1;)
while (Correct==false) { //
    var Guess = prompt("Guess my integer (between 0 and 100)!");
    if (Guess == Answer) {
        alert("CORRECT! You guessed it in "+Turns+" turns.");
        Correct = true; // Sets state of "Correct" boolean to true, which will then end the game.
    }
    else if (Guess > Answer) {
        alert("Hint: Try a lower number!");
    }
    else if (Guess < Answer) {
        alert("Hint: Try a higher number!");
    }
    Turns++; // Adds 1 to Turns.
}
alert("Thank you for playing.");
