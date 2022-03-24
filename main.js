const readLine = require('readline-sync');
let trying = 1;
//generate the random number
function randomNumber() {
	let number = Math.floor(Math.random() * 10);
	return number
}
function computerNumber() {
	let fourth = randomNumber();
	if (fourth == 0) {
		fourth = randomNumber();
	}
	for (let i; i = 1; i++) {
		let third = randomNumber();
		let second = randomNumber();
		let first = randomNumber();
		if (third != fourth && second != fourth && second != third && first != fourth && first != third && first != second) {
			let rnd = fourth.toString() + third.toString() + second.toString() + first.toString();
			console.log(rnd);
			return rnd;
		}
	}

}
const secretNumber = parseInt(computerNumber());
console.log(secretNumber);
const length = String(secretNumber).length;
console.log(`Загадане число містить ${length} цифри`);

//function compare the generated and input numbers
const getHint = (secret,guess) => {
	let bulls = 0;
	let cows = 0;
	const secretArr = String(secret).split('').map(elem => +elem);
	const guessArr = guess.split('').map(elem => +elem);

	for (let i = 0; i < secretArr.length;) {
		if (secretArr[i] === guessArr[i]) {
			bulls += 1;
			secretArr.splice(i,1);
			guessArr.splice(i,1);
		}
		else i += 1;
	}

	for (let j = 0; j <= guessArr.length; j++) {
		if (secretArr.includes(guessArr[j])) {
			cows += 1;
			secretArr.splice(secretArr.indexOf(guessArr[j]),1);
		}
	}

	return `Бики: ${bulls}; Корови: ${cows}.`;
};

//start the game!
while (true) {

	const query = readLine.question("Спроба: ");
	if (+query === secretNumber) {
		console.log(`Це правильне число! Спроб ${trying}`);
		break;
	}
	trying++;
	console.log(`${getHint(secretNumber,query)}`);
};