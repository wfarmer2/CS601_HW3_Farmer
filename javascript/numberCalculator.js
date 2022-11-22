/**
* Checks to see if user input is a valid number or not. 
* @param userInput is the value a user is giving the prompt.
*/
function numberCheck(userInput) {
    // check for a vaild number
    if (userInput === null || isNaN(userInput)) {
        // while the number is not valid continue to loop until number is received
        while (userInput !== null || !isNaN(userInput)) {
            alert("Invalid number! Please enter a valid number.");
            userInput = prompt("Please enter a number.");
            console.log(userInput)

            // once number is received move on to next prompt
            if (userInput !== null || isNaN(userInput)) {
                userInput = parseFloat(userInput);
                console.log(userInput)
                break;
            }
        }
    }
    // if valid number was received parse the input to integer
    else
    {
        userInput = parseFloat(userInput);
        console.log(userInput)
    }
    return userInput;
}


/**
* Prompts users to input two valid numbers and adds them together.
*/
function numberCalculator() {

    // prompt for first integer
    let firstUserInput = prompt("Please enter a number.");

    // convert input to valid format
    let firstNumber = numberCheck(firstUserInput);

    // prompt for first integer
    let secondUserInput = prompt("Please enter a second number.");

    // convert input to valid format
    let secondNumber = numberCheck(secondUserInput);

    // calculate the two integers
    let combinedNumber = firstNumber + secondNumber

    alert("The sum of your two numbers is: " + combinedNumber.toString());

    // alert if number is a big 
    if (combinedNumber > 10) {
        alert("That is a small number!")
        console.log(combinedNumber)
    }
    else if (combinedNumber <= 10) {
        alert("That is a small number!")
        console.log(combinedNumber)
    }
}