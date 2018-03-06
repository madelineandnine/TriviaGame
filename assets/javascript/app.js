$(document).ready(function () {


    var index = 0;
    var countdownTimer = {
        time: 15,
        reset: function () {
            this.time = 15;
            $("#timer").html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
            this.time = 15;
            $("#timer").html('<h3>' + this.time + ' seconds remaining</h3>');
            $("#start-button").hide()
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            $('#timer').html(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $("#timer").html(countdownTimer.time);
            }
            else {
                index++;
                wrongAnswer();
                countdownTimer.reset();
                if (index < questionBank.length) {
                    loadQuestion(index);
                } else {
                    $("#answerchoice").hide();
                    showScore();
                }
            }
        }
    };

    var correct = 0;
    var wrong = 0;

    var q1 = {
        question: 'How many kids are in the Weasley family?',
        possibleChoices: ['7',
            '5',
            '4',
            '9'],
        answer: '7'
    };

    var q2 = {
        question: 'What is the motto of Hogwarts?',
        possibleChoices: ['What do we say to death? Not today',
            'It does not do to dwell on dreams and forget to leave',
            'Don\'t tickle a sleeping dragon',
            'Wizards Unite'],
        answer: 'Don&apos;t tickle a sleeping dragon'
    };

    var q3 = {
        question: 'What is the number of Harry\'s vault at Gringotts?',
        possibleChoices: ['777',
            '100',
            '202',
            '687'],
        answer: '687'
    };

    var q4 = {
        question: 'Where did Voldemort\'s father live?',
        possibleChoices: ['Hogsmeade',
            'Godric\'s Hollow',
            'Hogwarts',
            'Italy'],
        answer: 'Godric\'s Hollow'
    };

    var q5 = {
        question: 'How did Albus Dumbledore break his nose?',
        possibleChoices: ['In a duel',
            'Snape slapped him',
            'In the Battle of Hogwarts',
            'His brother punched him'],
        answer: '687'
    };

   // var answerArray = ['687', 'Don\'t tickle a sleeping dragon', '7', 'Godric\'s Hollow', 'His brother punched him']

    var questionBank = [q1, q2, q3, q4, q5];
    var userChoiceA = $('#buttonA').val();
    var userChoiceB = $('#buttonB').val();
    var userChoiceC = $('#buttonC').val();
    var usedChoiceD = $('#buttonD').val();



    function loadQuestion(questionSelection) {
        countdownTimer.reset();
        $("#question").html("<h3>" + questionBank[questionSelection].question + "</h3>");
        $("#buttonA").text(questionBank[questionSelection].possibleChoices[0]);
        $("#buttonB").text(questionBank[questionSelection].possibleChoices[1]);
        $("#buttonC").text(questionBank[questionSelection].possibleChoices[2]);
        $("#buttonD").text(questionBank[questionSelection].possibleChoices[3]);
    }



    $('#start-button').on('click', function () {
        
        countdownTimer.start();
        loadQuestion(index);
        index = 0;
        console.log(loadQuestion);
        $('#start-button').hide();
    }); 


    function getAnswer() {

        $('.choices').on('click', function () {
            index++;
            $("#question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        }); 
    }

    function correctAnswer() {

        correct++;
        alert("Correct!");
        console.log("correct");
    }

    function wrongAnswer() {
        wrong++;
        alert("Wrong!");
        console.log("wrong");
    }

    function showScore() {
        $('#question').empty();
        $('#question').append("<h2><p>" + correct + " correct</p></h2>");
        $('#question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('#timer').empty();
    }

    //getAnswer();

    $('.answerchoice').on('click', function () {
        if ($(this).text() == questionBank[index].answer) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    });

    // index++;
    // if (index < questionBank.length) {
    //     loadQuestion(index);
    // } else {
    //     $('.choices').hide();
    //     showScore();
    // }
console.log("got here")
});