$(document).ready(function () {

    //Declare variables
    var question = "";
    var questionNum = 0;
    var answer1 = "";
    var answer2 = "";
    var answer3 = "";
    var answer4 = "";
    var correctAnswer = "";
    var correctNum = 0;
    var incorrectNum = 0;

    //Create timer
    var timerSet = "";
    var seconds = 10;
    function timer() {
        
        if (seconds <= 1) {

            clearInterval(timerSet);
            var timeout = "<h2>OUT OF TIME! The answer is " + correctAnswer + "</h2>";
            $("#box-content").append(timeout);
            $("#box").css("display", "block");
            incorrectNum++;
            questionNum++;
            if (questionNum < questions.length) {
                
                setTimeout(questions[questionNum], 3000);
    
            } else {
                var endGame = "<h2>Correct: " + correctNum + " Incorrect: " + incorrectNum + "</h2>";
                var restart = "<button id='restart'>Restart</button>";
                $("#box-content").append(endGame).append(restart);
            }

        }
        seconds--;
        $("#timer").text("Time remaining: " + seconds);
    }

    //Create trivia questions using an object of functions.
    var questions = [
        function() {

            question = "Which of the following utilizes smart contracts?";
            answer1 = "Bitcoin";
            answer2 = "Litecoin";
            answer3 = "Ethereum";
            answer4 = "Smartcoin";
            correctAnswer = answer3;
            displayQuestion();
        },

        function() {

            question = "Vitalik Buterin is an advisor for which of the following?";
            answer1 = "Bitcoin";
            answer2 = "Litecoin";
            answer3 = "OmiseGo";
            answer4 = "Dogecoin";
            correctAnswer = answer3;
            displayQuestion();
        },

        function() {

            question = "Which of the following is listed on Bittrex?";
            answer1 = "District0x (DNT)";
            answer2 = "0x (ZRX)";
            answer3 = "Binance (BNB)";
            answer4 = "Litecoin (LTC)";
            correctAnswer = answer4;
            displayQuestion();
        }
    ]

    //Allows user to select answer.
    $(".answer").on("click", function(){

        var answer = $(this).html();
        if (answer == correctAnswer) {
            console.log("correct");
            clearInterval(timerSet);
            var correct = "<h2>CORRECT!</h2>";
            $("#box-content").append(correct);
            $("#box").css("display", "block");
            correctNum++;

        } else {

            console.log("incorrect");
            clearInterval(timerSet);
            var incorrect = "<h2>INCORRECT! The answer is " + correctAnswer + "</h2>";
            $("#box-content").append(incorrect);
            $("#box").css("display", "block");
            incorrectNum++;

        }

        questionNum++;
        if (questionNum < questions.length) {
            
            setTimeout(questions[questionNum], 3000);

        } else {
            var endGame = "<h2>Correct: " + correctNum + " Incorrect: " + incorrectNum + "</h2>";
            var restart = "<button id='restart'>Restart</button>";
            $("#box-content").append(endGame).append(restart);
        }
    })

    //Displays trivia question.
    function displayQuestion() {

        $("#box").css("display", "none");
        $("#box-content").empty();
        seconds = 10;
        $("#timer").text("Time remaining: " + seconds);
        timerSet = setInterval(timer, 1000);
        $("#question").text(question);
        $("#answer1").text(answer1);
        $("#answer2").text(answer2);
        $("#answer3").text(answer3);
        $("#answer4").text(answer4);

    }

    //Creates start button
    $("#start").on("click", function() {

        $("#startDiv").empty();
        questions[questionNum]();

    })
    //Creates restart button
    $(document).on("click", "#restart", function() {
        
        $("#box").css("display", "none");
        correctNum = 0;
        incorrectNum = 0;
        questionNum = 0;
        questions[questionNum]();

    })
});