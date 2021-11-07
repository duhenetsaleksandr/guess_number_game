const inputUserValue = document.getElementById("user_number");
const checkBtn = document.getElementById("check");
const newGameBtn = document.getElementById("new_game");

const mainText = document.getElementById("main_text");
const promptText = document.getElementById("prompt_text");
const shotsLeft = document.getElementById("shots");

const initialValues = {};

function start(min = 1, max = 100, shots = 5) {
	initialValues.min = min;
	initialValues.max = max;
	initialValues.shots = shots;
	initialValues.mysNumbers = randomInteger(min, max);
	checkBtn.removeAttribute('disabled');
}


checkBtn.addEventListener('click', generate);
function generate () {
    let userNum = inputUserValue.value;
	if  (userNum.length === 0) {
		mainText.innerText = 'Value is empty';
		promptText.innerText = 'value must not be empty';
		return;
	}
	userNum = Number(userNum);
	if  (initialValues.shots > 0) {
		switch (true) {
			case (userNum < initialValues.min || userNum > initialValues.max):
				initialValues.shots -= 1;
				mainText.innerText = 'Number outside the range';
				promptText.innerText = 'value must be in the range';
				shotsLeft.innerText = initialValues.shots;
				break;
			case (Number.isInteger(userNum) === false):
				initialValues.shots -= 1;
				mainText.innerText = 'Number is not integer';
				promptText.innerText = 'only integer';
				shotsLeft.innerText = initialValues.shots;
				break;
			case (userNum > initialValues.mysNumbers):
				initialValues.shots -= 1;
				mainText.innerText = 'You did not guess right';
				promptText.innerText = 'bit too much';
				shotsLeft.innerText = initialValues.shots;
				break;
			case (userNum < initialValues.mysNumbers):
				initialValues.shots -= 1;
				mainText.innerText = 'You did not guess right';
				promptText.innerText = 'not enough';
				shotsLeft.innerText = initialValues.shots;
				break;
			case (userNum === initialValues.mysNumbers):
				mainText.innerText = 'You win';
				promptText.innerText = `mystery number is ${initialValues.mysNumbers}`;
				stop();
				break;
			default:
				initialValues.shots -= 1;
				break;
		}
	}
	if (initialValues.shots === 0) {
		mainText.innerText = 'Game over';
		promptText.innerText = 'try again';
		stop();
	}
}

function stop() {
	checkBtn.setAttribute('disabled', 'disabled');
}

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();

