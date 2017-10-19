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
    $("#triviaQuestion1").append(questions[0].name)
    $("#1a").append(questions[0].choices[0])
    $("#1b").append(questions[0].choices[1])
    $("#1c").append(questions[0].choices[2])
    $("#1d").append(questions[0].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion2").append(questions[1].name)
    $("#2a").append(questions[1].choices[0])
    $("#2b").append(questions[1].choices[1])
    $("#2c").append(questions[1].choices[2])
    $("#2d").append(questions[1].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion3").append(questions[2].name)
    $("#3a").append(questions[2].choices[0])
    $("#3b").append(questions[2].choices[1])
    $("#3c").append(questions[2].choices[2])
    $("#3d").append(questions[2].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion4").append(questions[3].name)
    $("#4a").append(questions[3].choices[0])
    $("#4b").append(questions[3].choices[1])
    $("#4c").append(questions[3].choices[2])
    $("#4d").append(questions[3].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion5").append(questions[4].name)
    $("#5a").append(questions[4].choices[0])
    $("#5b").append(questions[4].choices[1])
    $("#5c").append(questions[4].choices[2])
    $("#5d").append(questions[4].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion6").append(questions[5].name)
    $("#6a").append(questions[5].choices[0])
    $("#6b").append(questions[5].choices[1])
    $("#6c").append(questions[5].choices[2])
    $("#6d").append(questions[5].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion7").append(questions[6].name)
    $("#7a").append(questions[6].choices[0])
    $("#7b").append(questions[6].choices[1])
    $("#7c").append(questions[6].choices[2])
    $("#7d").append(questions[6].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion8").append(questions[7].name)
    $("#8a").append(questions[7].choices[0])
    $("#8b").append(questions[7].choices[1])
    $("#8c").append(questions[7].choices[2])
    $("#8d").append(questions[7].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion9").append(questions[8].name)
    $("#9a").append(questions[8].choices[0])
    $("#9b").append(questions[8].choices[1])
    $("#9c").append(questions[8].choices[2])
    $("#9d").append(questions[8].choices[3])
});

$("#start-button").on("click", function() {
    $("#triviaQuestion10").append(questions[9].name)
    $("#10a").append(questions[9].choices[0])
    $("#10b").append(questions[9].choices[1])
    $("#10c").append(questions[9].choices[2])
    $("#10d").append(questions[9].choices[3])
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