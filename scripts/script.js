const inputUserValue = document.getElementById("user_number");
const checkBtn = document.getElementById("check");
const newGameBtn = document.getElementById("new_game");

const mainText = document.getElementById("main_text");
const promptText = document.getElementById("prompt_text");
const shotsLeft = document.getElementById("shots");

const initialValues = {};

checkBtn.addEventListener('click', generate);
newGameBtn.addEventListener('click', newGame);

function start(min = 1, max = 100, shots = 5) {
	initialValues.min = min;
	initialValues.max = max;
	initialValues.shots = shots;
	initialValues.shotsCounter = shots;
	initialValues.mysNumbers = randomInteger(min, max);
	checkBtn.removeAttribute('disabled');
	show('try your luck', 'guess the mysterious number');
	inputUserValue.value = '';
}

function newGame() {
	start();
}

function generate () {
    let userNum = inputUserValue.value;
	if  (userNum.length === 0) {
		show ('Value is empty', 'value must not be empty');
		return;
	}
	userNum = Number(userNum);
	if  (initialValues.shotsCounter > 0) {
		switch (true) {
			case (userNum < initialValues.min || userNum > initialValues.max):
				initialValues.shotsCounter -= 1;
				show ('Number outside the range', 'value must be in the range');
				break;
			case (Number.isInteger(userNum) === false):
				initialValues.shotsCounter -= 1;
				show('Number is not integer', 'only integer');
				break;
			case (userNum > initialValues.mysNumbers):
				initialValues.shotsCounter -= 1;
				show('You did not guess right', 'bit too much');
				break;
			case (userNum < initialValues.mysNumbers):
				initialValues.shotsCounter -= 1;
				show('You did not guess right', 'not enough');
				break;
			case (userNum === initialValues.mysNumbers):
				const tookShots = initialValues.shots - initialValues.shotsCounter + 1; 
				show('You win', `mystery number is ${initialValues.mysNumbers}`, `you needed ${tookShots} shots`);
				stop();
				break;
			default:
				initialValues.shotsCounter -= 1;
				show('You did not guess right', 'try again');
				break;
		}
	}
	if (initialValues.shotsCounter === 0) {
		show('Game over', 'try again');
		stop();
	}
}

function show(title, prompt, shots = `${initialValues.shotsCounter} shots left`){
	mainText.innerText = title;
	promptText.innerText = prompt;
	shotsLeft.innerText = shots;
}

function stop() {
	checkBtn.setAttribute('disabled', 'disabled');
}

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();

