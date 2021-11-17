function randomInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function show(title, prompt, shots = `${initialValues.shotsCounter} shots left`){
   mainText.innerText = title;
   promptText.innerText = prompt;
   shotsLeft.innerText = shots;
}

function stop() {
   checkBtn.setAttribute('disabled', 'disabled');
   inputUserValue.setAttribute('disabled', 'disabled');
}

function config(event) {
   event.preventDefault();
   let inputMinElement = inputMin.value.trim().length ? Number(inputMin.value) : 0;
   let inputMaxElement = inputMax.value.trim().length ? Number(inputMax.value) : 0;
   let inputShotsElement = shotsAdd.value.trim().length ? Number(shotsAdd.value) : 0;
   inputMin.value = '';
   inputMax.value = '';
   shotsAdd.value = '';
   switch (true) {
      case (inputMinElement.length === 0 || inputMaxElement.length === 0 || inputShotsElement.length === 0):
         return;
      case (inputMaxElement <= inputMinElement):
         return;
      case (inputShotsElement < 1 || inputShotsElement > 15):
         return;
      case (inputMinElement < 1 || inputMinElement > 200):
         return;
      case (inputMaxElement < 1 || inputMaxElement > 200):
         return;
      default:
         init(inputMinElement, inputMaxElement, inputShotsElement);
   }
 }
