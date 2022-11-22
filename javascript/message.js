/**
* Alerts user with a welcome message.
*/
function welcomeMessage() 
{
    // alert message for loading the website
    alert('Welcome to the Simple Calculator!');
}

/**
* Prompts a user for their name and validates if 
* it is the correct format then alerts a greeting message.
*/
function retrieveUsername()
{
    // variable for name of the user
    let userName = prompt("What is your name?");

    // check for a vaild name
    if (userName === null || !isNaN(userName)) {
        // while the name is not valid continue to loop until correct format is received
        while (userName !== null || isNaN(userName)) {
            alert("Invalid name! Please enter a valid name.");
            userName = prompt("What is your name?");
            console.log(userName)
            // once correct format is received send alert greeting message
            if (userName !== null || !isNaN(userName)) {
                alert("Hello " + userName + "!");
                console.log(userName)
                break;
           }
        }
    } 
    // if valid name was received on first try send alert greeting message
    else
    {
        alert("Hello " + userName + "!");
        console.log(userName)
    }
}