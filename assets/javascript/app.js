// global variables //
var time = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer;

var questions = [{
        name: "1. What is the longest river in the world?",
        choices: ["Nile", "Mississippi", "Ganges", "Amazon"],
        answer: "Nile"
    },
    {
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

//populate questions
$("#start-button").on("click", function() {
    $("#triviaQuestion1").text(questions[1].name)
});

$("#start-button").on("click", function() {
    $("#triviaQuestion2").text(questions[2].name)
});

$("#start-button").on("click", function() {
    $("#triviaQuestion3").text(questions[3].name)
});

$("#start-button").on("click", function() {
    $("#triviaQuestion4").text(questions[4].name)
});

$("#start-button").on("click", function() {
    $("#triviaQuestion5").text(questions[5].name)
});

$("#start-button").on("click", function() {
    $("#triviaQuestion6").text(questions[6].name)
});

$("#start-button").on("click", function() {
    $("#triviaQuestion7").text(questions[7].name)
});

$("#start-button").on("click", function() {
    $("#triviaQuestion8").text(questions[8].name)
});

$("#start-button").on("click", function() {
    $("#triviaQuestion9").text(questions[9].name)
});

$("#start-button").on("click", function() {
    $("#triviaQuestion10").text(questions[10].name)
});




//check answers