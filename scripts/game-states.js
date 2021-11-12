function start(min = 1, max = 100, shots = 5) {
	initialValues.min = min;
	initialValues.max = max;
	initialValues.shots = shots;
	initialValues.shotsCounter = shots;
	initialValues.mysNumbers = randomInteger(min, max);

	checkBtn.removeAttribute('disabled');
	inputUserValue.removeAttribute('disabled');
	show(MAIN_TEXT_MESSAGE, PROMPT_TEXT_MESSAGE);
	inputUserValue.value = '';
	inputUserValue.focus();
}

function newGame(event) {
	event.preventDefault();
	start();
}

function stop() {
	checkBtn.setAttribute('disabled', 'disabled');
	inputUserValue.setAttribute('disabled', 'disabled');
}