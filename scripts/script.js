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
}

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();