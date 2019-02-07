// Crystal Variables
 var crystal = {
    red:
    {
        name: "red",
        value: 0
    },
    
    blue:
    {
        name: "blue",
        value: 0
    },

    yellow:
    {
        name: "yellow",
        value: 0
    },

    green:
    {
        name: "green",
        value: 0
    } 
 };

//  Track Scores
 var currentScore = 0;
 var targetScore = 0;

//  Wins and Losses
 var winCount = 0;
 var lossCount = 0;


// Functions
// Function to get random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts and restarts the game
var startGame = function() {

// Reset current score
    currentScore = 0;

// Set a new target score (between 19 and 120)
    targetScore = getRandom(19, 120);


// Set different values for crystals (Between 1 and 12)
crystal.red.value = getRandom(1, 12);    
crystal.blue.value = getRandom(1, 12);
crystal.yellow.value = getRandom(1, 12);
crystal.green.value = getRandom(1, 12);
    

// Change HTML to reflect changes
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);


// Test game
console.log("=========================")
console.log("Target Score: " + targetScore);
console.log("Red: " + crystal.red.value + "| Blue: " + crystal.blue.value + "| Yellow: " + crystal.yellow.value + "| Green: " + crystal.green.value);
console.log("=========================")
}

// Respond to clicks on the crystals
var addValues = function(crystal) {
    currentScore = currentScore + crystal.value;

// Change the HTML to reflect changes in currentScore    
$("#yourScore").html(currentScore);

// Call the checkWin from below
checkWin();


// Test
console.log("Your Score: " + currentScore);

}

// Check win or lose and rest the game
var checkWin = function() {

// Check the currentScore is larger than targetScore
if (currentScore > targetScore) {
    alert("Sorry, you didn't win!")
    console.log("Sorry, you didn't win!");

    lossCount++;

// Change lossCount
$("#lossCount").html(lossCount);

// Restart the game
startGame();
}

else if (currentScore === targetScore) {
    alert("You Win!")
    console.log("You Win!");

    winCount++;

    // Change winCount
$("#winCount").html(winCount);

// Restart the game
startGame();
}

}



// Main process click event
// ===================================

// Starts the game for the first time
startGame();

$("#blue").click(function(){
    addValues(crystal.blue);
});

$("#red").click(function(){
    addValues(crystal.red);
});

$("#green").click(function(){
    addValues(crystal.green);
});

$("#yellow").click(function(){
    addValues(crystal.yellow);
});











