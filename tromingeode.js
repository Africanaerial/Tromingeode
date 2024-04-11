function Game() {
    alert("Welcome to Tromingeode.");
    var username = prompt("Please enter a username. DO NOT USE YOUR REAL NAME.");
    var confirmUsername = prompt("You have chosen" + " " + username + " " + "as your name. Do you confirm? yes/no");
    if(confirmUsername = "yes") {
        alert("Your name has been saved to the game code.");
        }
        else if(confirmUsername = "no") {
            for(let i = 0; i < confirmUsername; i++) {
                if(confirmUsername = "yes") {
                    alert("Your name has been saved to the game code.");
                    }
                }
            }
}
Game();