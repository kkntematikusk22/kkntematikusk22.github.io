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
		q: 'Pernahkah Anda mengalami gejala demam dalam 14 hari?',
		options: ['Tidak', 'Pernah'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala gangguan pernapasan akut?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala batuk kering?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala batuk berdahak?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala kelelahan yang berlebihan?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala sesak napas?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala nyeri otot atau nyeri sendi?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah anda mengalami gejala sakit tenggorokan?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala sakit kepala?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala menggigil?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala mual atau muntah?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala hidung tersumbat?',
		options: ['Tidak', 'Iya'],
		answer: 1,
		percentage: 100
	},
	{
		q: 'Apakah Anda mengalami gejala diare?',
		options: ['Tidak', 'Iya'],
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
			recommendation.innerHTML = 'Tetap Tenang, Hubungi rumah sakit terdekat untuk datang menjemput Anda dan merawat Anda. Ingatlah untuk tidak pergi ke mana pun dan melakukan kontak fisik dengan siapa pun, semoga Anda segera sembuh.';
		} else {
			alert.className += ' alert-success';
			recommendation.innerHTML = 'Jaga kesehatan, jangan pergi ke mana pun untuk sementara,tetap berada di rumah Anda. Pergilah hanya saat ada keperluan yang dibutuhkan.';
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
