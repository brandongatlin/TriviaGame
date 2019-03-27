let time = 15;
let correct = 0;
let incorrect = 0;
let count = 0;

// setTimeout(checkAnswers, 1000 * time);

var questions = [
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
  }
];

let intervalId = setInterval(timer, 1000);

function timer() {
  $("#timer-box").text(time);

  if (time === 0) {
    checkAnswers();
  }
  time--;
}

function displayQuestions(array) {
  for (let i = 0; i < array.length; i++) {
    let form = $(`<form>`);

    let q = array[i].name;
    let qDiv = $(`<div>${q}</div>`);
    form.append(qDiv);

    for (let j = 0; j < array[i].choices.length; j++) {
      let answer = array[i].choices[j];
      //   console.log(answer);
      let answerDiv = $(
        `<input type=radio name='${
          array[i].name
        }' value='${answer}'>${answer}</input>`
      );
      qDiv.append(answerDiv);
    }
    $("#question-box").append(form);
  }
}

displayQuestions(questions);

function checkAnswers() {
  clearInterval(intervalId);
  $("input[type='radio']:checked").each(function(idx, el) {
    let playGuess = $(this).val();
    let realAnswer = questions[idx].answer;

    if (playGuess === realAnswer) {
      correct++;
      $(this)
        .parent()
        .addClass("right");
    } else {
      $(this)
        .parent()
        .addClass("wrong");
    }
  });
  displayScore();
}

// $("#submit").on("click", function(e) {
//   //   if (validate()) {
//   checkAnswers(questions);
//   //   } else {
//   //     time = time + 10;
//   //   }
// });

function validate() {
  $("input[type='radio']").each(function(idx, el) {
    if ($("input[type='radio']:checked").length === 10) {
      return true;
    } else {
      return false;
    }
  });
}

function displayScore() {
  incorrect = 10 - correct;
  $("#right").append(correct);
  $("#wrong").append(incorrect);
}
