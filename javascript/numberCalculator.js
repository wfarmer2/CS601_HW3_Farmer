/**
* Checks to see if user input is a valid number or not. 
* Validates input if it is not text to ensure text number is received.
* TODO: Add validation against special characters (couldn't get it working)
* @param userInput is the value a user is giving the prompt.
*/
function numberCheck(userInput) {
    // check for a vaild number
    if (userInput === null || isNaN(userInput)) {
        // while the number is not valid continue to loop until number is received
        while (userInput !== null || !isNaN(userInput)) {
            alert("Invalid number! Please enter a valid number.");
            userInput = prompt("Please enter a number.");
            // once number is received move on to next prompt
            if (userInput !== null || isNaN(userInput)) {
                userInput = parseFloat(userInput);
                break;
            }
        }
    }
    // if valid number was received parse the input to integer
    else
    {
        userInput = parseFloat(userInput);
    }
    return userInput;
}


/**
* Prompts users to input two valid numbers and adds them together.
* Converts prompt string value into float to combine and alert to the 
* user. 
*/
function numberCalculator() {

    // prompt for first number
    let firstUserInput = prompt("Please enter a number.");

    // convert input to valid format
    let firstNumber = numberCheck(firstUserInput);

    // prompt for first number
    let secondUserInput = prompt("Please enter a second number.");

    // convert input to valid format
    let secondNumber = numberCheck(secondUserInput);

    // calculate the two numbers
    let combinedNumber = firstNumber + secondNumber;

    alert("The sum of your two numbers is: " + combinedNumber.toString());

    // alert if number is big 
    if (combinedNumber > 10) {
        alert("That is a big number!");
    }
    // alert if number is small
    else if (combinedNumber <= 10) {
        alert("That is a small number!");
    }
}

/**
* Repeat process for a user to keep using the calculator.
* Makes the user type in YES or NO to either continue the calculator or exit the program
* TODO: Cancel option to exit the program as another path to close calculator (couldn't get done)
*/
function repeatProcess() {
    // prompt user to use the calculator again or not
    let userSelection = prompt("Would you like to use the calculator again? Please type YES or NO.");

    // loop until the user exits the calculator by typing in NO
    while (userSelection !== null || isNaN(userName)) {

        // if user wants to continue with the calculator again, call the numberCalculator function
        if (userSelection.toUpperCase() == "YES") {
            numberCalculator();
            userSelection = prompt("Would you like to use the calculator again? Please type YES or NO.");
        }
        // if user wants to stop the calculator send a thank you message and close
        else if (userSelection.toUpperCase() == "NO") {
            alert("Thank you for using the Simple Calculator! Take care!");
            break;
        }
        // reprompt the user if the input is not a YES or NO
        else {
            userSelection = prompt("Invalid choice! Please type YES or NO to use the calculator again.");
        }
    }
}