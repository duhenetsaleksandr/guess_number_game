function init(min = 1, max = 100, shots = 5) {
	initialValues.min = min;
	initialValues.max = max;
	initialValues.shots = shots;
	initialValues.shotsCounter = shots;
	initialValues.mysNumbers = randomInteger(min, max);
	minInfo.innerText = String(min);
	maxInfo.innerText = String(max);


	checkBtn.removeAttribute('disabled');
	inputUserValue.removeAttribute('disabled');
	show(MAIN_TEXT_MESSAGE, PROMPT_TEXT_MESSAGE);
	inputUserValue.value = '';
	inputUserValue.focus();
}

function enterSubmit(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		generate(event);
	}
}

function newGame(event) {
	event.preventDefault();
	init();
}

function change_theme(event) {
	event.preventDefault();
	html.classList.toggle('dark-theme');
}

inputUserValue.addEventListener('keydown', enterSubmit);
checkBtn.addEventListener('click', generate);
newGameBtn.addEventListener('click', newGame);
configBtn.addEventListener('click', config);
wrapperText.addEventListener('animationend', () => wrapperText.classList.remove('active'));
switchTheme.addEventListener('change', change_theme);

window.onload = function () {
	init();
};