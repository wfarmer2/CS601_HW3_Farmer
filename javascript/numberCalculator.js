/**
* Checks to see if user input is a valid number or not. 
* @param userInput is the value a user is giving the prompt.
*/
function numberCheck(userInput) {

    // check for a vaild number
    if (userInput === null || isNaN(userInput)) {
        // while the number is not valid continue to loop until number is received
        while (userInput !== null || !isNaN(userInput)) {
            alert("Invalid integer! Please enter a valid integer.");
            userInput = prompt("Please enter an integer.");
            console.log(userInput)

            // once number is received move on to next prompt
            if (userInput !== null || isNaN(userInput)) {
                userInput = parseInt(userInput);
                console.log(userInput)
                break;
            }
        }
    }
    // if valid number was received parse the input to integer
    else
    {
        userInput = parseInt(userInput);
        console.log(userInput)
    }

    return userInput;
}


/**
* Prompts users to input two valid numbers and adds them together.
*/
function numberCalculator() {

    // prompt for first integer
    let firstUserInput = prompt("Please enter an integer.");

    // convert input to valid format
    let firstNumber = numberCheck(firstUserInput);

    // prompt for first integer
    let secondUserInput = prompt("Please enter a second integer.");

    // convert input to valid format
    let secondNumber = numberCheck(secondUserInput);

    // calculate the two integers
    let combinedNumber = firstNumber + secondNumber

    // alert if number is a big or small number
    if (combinedNumber > 10) {
        alert(combinedNumber.toString() + " - That is a big number!");
        console.log(combinedNumber)
    }
    else if (combinedNumber <= 10) {
        alert(combinedNumber.toString() + " - That is a small number!")
        console.log(combinedNumber)
    }

}