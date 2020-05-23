let op1 = id('op1');
let op2 = id('op2');
let questionBox = id('questionBox');
let questionCount = id('question-count');
let result = id('result');
let alert = id('alert');
let percent = id('percent');
let recommendation = id('recommendation');

let index = 0;
let sum = 0,
	percents = 0;

let questions = [{
		q: 'Have you experienced symptoms of fever within 14 days?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of acute respiratory distress?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing dry cough symptoms?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of cough with phlegm?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of excessive fatigue?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of shortness of breath?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of muscle pain or joint pain?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of a sore throat?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of a headache?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing shivering symptoms?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of nausea or vomiting?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of nasal congestion?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Are you experiencing symptoms of diarrhea?',
		options: ['No', 'Yes'],
		answer: 1,
		percentage: 100
	},
];

function load() {
	if (index < questions.length) {
		questionCount.innerHTML = 'QUESTION ' + (index + 1);
		questionBox.innerHTML = questions[index].q;
		op1.innerHTML = questions[index].options[0];
		op2.innerHTML = questions[index].options[1];
	} else {
		questionCount.innerHTML = 'RESULT';
		op1.style.display = 'none';
		op2.style.display = 'none';
		questionBox.style.display = 'none';

		percents = sum / questions.length;
		percent.innerHTML = percents.toFixed(2) + '%';

		if (percents >= 50) {
			alert.className += ' alert-danger';
			recommendation.innerHTML = 'Stay Calm, Call the nearest hospital to come pick you up and take care of you. Remember not to go anywhere and made physical contact with anyone, may you get better soon, God Bless You.';
		} else {
			alert.className += ' alert-success';
			recommendation.innerHTML = 'Stay healthy, dont go anywhere for a while, stay in your house. Go out only when neccesary, God Bless You.';
		}

		result.style.display = '';
	}
}

function checkAnswer(e) {
	if (e.innerHTML == questions[index].options[questions[index].answer])
		sum += questions[index].percentage;
	index++;
	load();
}

function id(name) {
	return document.getElementById(name);
}
window.onload = load();