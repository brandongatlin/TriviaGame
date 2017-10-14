var questionArray = [
	"What is the longest river in the world?",
	"What is the highest lake in the world?",
	"What is the biggest island in the world?",
	"What is the fastest fish in the world?",
	"What is the river that flows thru the most countries in the world?"
];

console.log(questionArray[4]);

Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10

var randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];

	console.log(randomQuestion);
