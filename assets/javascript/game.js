var computerNumber = 0;
var random_result;
var wins = 0;
var losesses = 0;
var yourTotalScoreIs = [];



// Open game with a random number set by the computer when game opens

    var computerNumber = Math.floor(Math.random() * 101) + 19;
        $("#compNumber").html(computerNumber);
    
    console.log(computerNumber);


// Set each crystal to have a random hidden value between 1 - 12
// when the game begins

// On the clicked crystal add to the previous number 
// until it equals the total score

$(function (){

        $(".crystal1").on("click",function() {
            var crystal1 = Math.floor(Math.random() * 11) + 1;
            console.log(crystal1);
        });

        $(function () {
            $(".crystal2").on("click",function() {
                var crystal2 = Math.floor(Math.random() * 11) + 1;
                console.log(crystal2);
            });
        });

        $(function () {
            $(".crystal3").on("click",function() {
                var crystal3 = Math.floor(Math.random() * 11) + 1;
                console.log(crystal3);
            });
        });

        $(function () {
            $(".crystal4").on("click",function() {
                var crystal4 = Math.floor(Math.random() * 11) + 1;
                console.log(crystal4);
            });
        });
});


// Set new random number for each win or lose on each crystal
// If it equals increase wins by one & start over
// If it doesn't equal increase losesses by one and start game over






// Show your total score from clicked crystals
