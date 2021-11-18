function generate(event) {
	event.preventDefault();
	let userNum = inputUserValue.value;
	if (userNum.length === 0) {
		show('Value is empty', 'value must not be empty');
		return;
	}
	userNum = Number(userNum);
	if (initialValues.shotsCounter > 0) {
		switch (true) {
			case (userNum < initialValues.min || userNum > initialValues.max):
				initialValues.shotsCounter -= 1;
				show('Number outside the range', 'must be in the range');
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
	inputUserValue.value = "";
	inputUserValue.focus();
}