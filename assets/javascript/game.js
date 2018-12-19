var wins = 0;
var losses = 0;
var compnumber;
var previous = 0;

// Set computer random number to start game between 19 - 120

var resetAndStart = function () {
    $(".crystals").empty();

    var images = ["red.png", "blue.png", "yellow.png", "green.png"]
    compNumber = Math.floor(Math.random() * 120) + 19;

    $("#compnumber").html("Random Number: " + random_number);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(computerNumberGuess);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
        });

        $(".crystals").append(crystals);
    }
}

$("#previous").html("Total Score: " + previous);

resetAndStart();

$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr("data-random"));

    previous += num;
  
    $("#previous").html("Total score: " + previous);

    console.log(previous);

    if (previous > random_result) {
        losses++;
        $("#losses").html("You lost: " + losses);
        console.log("You lose!");

        resetAndStart();
    }


    else if (previous === random_number) {
        wins++;

        $("#win").html(win);

        previous = 0
        
        console.log("You win!");
        resetAndStart();
    }
});







// Set each crystal to have a random hidden value between 1 - 12



// Set new random number for each win or lost on each crystal

// On the clicked crystal add to the previous number 
// until it equals the total score

// If it equals increase wins start over

// If it doesn't equal increase losesses start game over

// Show your total score from clicked crystals