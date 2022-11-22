/**
* Alerts user with a welcome message when starting the program.
*/
function welcomeMessage() 
{
    // alert message for loading the website
    alert('Welcome to the Simple Calculator!');
}

/**
* Prompts a user for their name and validates if 
* it is the correct format then alerts a greeting message.
* Validates input if it is not a number to ensure text value is received.
* TODO: Add validation against special characters (couldn't get it working)
*/
function retrieveUsername()
{
    // define variable
    let userName = null;

    // loop until correct format is received
    while (userName === null || !isNaN(userName)){
        // variable for name of the user
        userName = prompt("What is your name?");
        // conditional check for proper name format
        if (userName === null || !isNaN(userName)) {
            alert("Invalid name! Please enter your name in text format.");
        }
        else
        {
          // greet user with hello message when string is received
          alert("Hello " + userName + "!")
          break;
        }
      }
}