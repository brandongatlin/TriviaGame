//timer
//setTimeout(oneMinute, 1000 * 60);

//function oneMinute()

// global variables //
var time = 60;
var correct = 0;
var incorrect = 0;
var timer;

var questions = [{
        name: "1. What is the longest river in the world?",
        choices: ["Nile", "Mississippi", "Ganges", "Amazon"],
        answer: "Nile"
    },
    {
        name: "2. What is the largest lake in the world?",
        choices: ["Titicaca", "Victoria", "Lake Superior", "Caspian"],
        answer: "Caspian"
    },
    {
        name: "3. What river passes thru the most countries in the world?",
        choices: ["Amazon", "Danube", "Yellow", "Nile"],
        answer: "Danube"
    },
    {
        name: "4. What is the youngest country in the world?",
        choices: ["South Sudan", "Palau", "East Timor", "Kosovo"],
        answer: "South Sudan"
    },
    {
        name: "5. What country has the most national languages?",
        choices: ["Switzerland", "India", "Zimbabwe", "South Africa"],
        answer: "Zimbabwe"
    },
    {
        name: "6. What is the largest country in the world?",
        choices: ["Russia", "United States", "Canada", "China"],
        answer: "Russia"
    },
    {
        name: "7. What country has the most islands?",
        choices: ["Indonesia", "Canada", "United Kingdom", "Finland"],
        answer: "Finland"
    },
    {
        name: "8. What is the tallest mountain in Africa?",
        choices: ["K2", "Kilimangaro", "Everest", "Rushmore"],
        answer: "Kilimangaro"
    },
    {
        name: "9. What country has the tallest people on average?",
        choices: ["Denmark", "Germany", "Sudan", "Netherlands"],
        answer: "Netherlands"
    },
    {
        name: "10. What is the most populated city in the world?",
        choices: ["Beijing", "Mexico City", "Tokyo", "Mumbai"],
        answer: "Beijing"
    },
];

//check to see if array of objects is correct
console.log(questions[0].name) //1. What is the longest river in the world?

//$(document).ready(function() {

//$("#start-button").on("click", function() {

//populate questions and answers
$("#start-button").on("click", function() {
    $("#triviaQuestion1").text(questions[0].name)
    $("#1a").text(questions[0].choices[0])
    $("#1b").text(questions[0].choices[1])
    $("#1c").text(questions[0].choices[2])
    $("#1d").text(questions[0].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion2").text(questions[1].name)
    $("#2a").text(questions[1].choices[0])
    $("#2b").text(questions[1].choices[1])
    $("#2c").text(questions[1].choices[2])
    $("#2d").text(questions[1].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion3").text(questions[2].name)
    $("#3a").text(questions[2].choices[0])
    $("#3b").text(questions[2].choices[1])
    $("#3c").text(questions[2].choices[2])
    $("#3d").text(questions[2].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion4").text(questions[3].name)
    $("#4a").text(questions[3].choices[0])
    $("#4b").text(questions[3].choices[1])
    $("#4c").text(questions[3].choices[2])
    $("#4d").text(questions[3].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion5").text(questions[4].name)
    $("#5a").text(questions[4].choices[0])
    $("#5b").text(questions[4].choices[1])
    $("#5c").text(questions[4].choices[2])
    $("#5d").text(questions[4].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion6").text(questions[5].name)
    $("#6a").text(questions[5].choices[0])
    $("#6b").text(questions[5].choices[1])
    $("#6c").text(questions[5].choices[2])
    $("#6d").text(questions[5].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion7").text(questions[6].name)
    $("#7a").text(questions[6].choices[0])
    $("#7b").text(questions[6].choices[1])
    $("#7c").text(questions[6].choices[2])
    $("#7d").text(questions[6].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion8").text(questions[7].name)
    $("#8a").text(questions[7].choices[0])
    $("#8b").text(questions[7].choices[1])
    $("#8c").text(questions[7].choices[2])
    $("#8d").text(questions[7].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion9").text(questions[8].name)
    $("#9a").text(questions[8].choices[0])
    $("#9b").text(questions[8].choices[1])
    $("#9c").text(questions[8].choices[2])
    $("#9d").text(questions[8].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion10").text(questions[9].name)
    $("#10a").text(questions[9].choices[0])
    $("#10b").text(questions[9].choices[1])
    $("#10c").text(questions[9].choices[2])
    $("#10d").text(questions[9].choices[3])
});

console.log(questions[0].choices[0])

//check answers

// trying to check answers without for loop
//var answer1 = $("input[name=answer" + i + "]:checked").val();

// function checkAnswers()
// trying to check anwers with for loop
// var answer = $("input[name=answer" + i + "]:checked").val();

// for (var i = 0; i < questions.length; i++) {
// if (answer === questions[i].answer) {
//   correct++;
//}

//                        if (answer != questions[i].answer) {
//                          incorrect++;
//                    }
//              }

//    $("#submit-button").on("click", function(checkAnswers)