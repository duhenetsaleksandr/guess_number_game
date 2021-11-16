function randomInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function show(title, prompt, shots = `${initialValues.shotsCounter} shots left`){
   mainText.innerText = title;
   promptText.innerText = prompt;
   shotsLeft.innerText = shots;
}