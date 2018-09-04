var Answer = Math.round(Math.random()*100); // Generates a variable which is a non-integer, and multiplies it by 100 and rounds it up to create an integer. - generate random number btween 0 and one, multiply by 1, convert to integer with round up
var Turns=0; // Sets turns to 0. By using the word "var", you signal that it's creating a variable. You don't have to add "var" to it afterwards. - Initalize turns variable, set to 0.
var Correct=false; // Sets default state of the "Correct" boolean to false. - initalize boolean variable Correct, set to value False
Turns++; // Adds 1 to Turns. (New!Turns = Old!Turns + 1;) The extra plus is to set it to 1 and above if it's 0.
while (Correct==false) { //this loops when the "Correct" boolean is set to false.
    var Guess = prompt("Guess my integer (between 0 and 100)!"); //Initalizes the variable "Guess" and it will change to whatever value the user inputs. - initalize Guess, set value to user input, telling user what to input
    if (Guess == Answer) { //Checks to see if your guess is the same as the variable "Answer". It will stop looping when the boolean "Correct" is set to true two lines below this. - check if gues is equal to answer
        alert("CORRECT! You guessed it in "+Turns+" turns."); //It outputs the amount of turns it took as a variable. - if equal, say "correct" and number of turns
        Correct = true; // Sets state of "Correct" boolean to true, which will then end the game. - set Cprrect tp trie tp get pit pf pir wjo;e ;pp[ - set correct to get out of our "while loop"

    }
    else if (Guess > Answer) { //If your guess is higher than the answer, this will happen.
        alert("Hint: Try a lower number!"); //Gives off an alert that your number is too high before repeating.
    }
    else if (Guess < Answer) { //If your guess is lower than the answer, this will happen.
        alert("Hint: Try a higher number!"); //Gives off an alert that your number is too low before repeating.
    }
    Turns++; // Adds 1 to Turns.
}
    if (Turns < 6) {
        alert("Congratulations for beating it in 5 turns or less! Thank you for playing."); //Gives off an exclusive alert if you beat it in 5 turns or less.
    }
        else //Goes to line below this one.
alert("Thank you for playing."); //This gives off an alert before ending it.
