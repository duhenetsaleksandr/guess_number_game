function show(title, prompt, shots = `${initialValues.shotsCounter} shots left`){
   mainText.innerText = title;
   promptText.innerText = prompt;
   shotsLeft.innerText = shots;
}