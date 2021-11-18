describe('On HTML', function () {
   it('should decrement attempts after failing to guess', function () {
      window.onload = () => {}
      init();
      for (let i = 0; i < initialValues.shots; i++) {
         document.getElementById('user_number').value = initialValues.mysNumbers + 1;
         document.getElementById('check').click();
         const currentShots = parseInt(document.getElementById('shots').innerText);
         expect(currentShots).to.be.equal(initialValues.shots - 1 - i);
      }
   });

   it('should show message "GAME OVER" if attempts ended and the number was not guessed', function () {
      window.onload = () => {}
      init();
      for (let i = 0; i < initialValues.shots; i++) {
         document.getElementById('user_number').value = initialValues.mysNumbers + 1;
         document.getElementById('check').click();
         const currentShots = parseInt(document.getElementById('shots').innerText);
      }
      expect(document.getElementById('main_text').innerText.toLowerCase()).to.be.equal('game over');
   });

   it('should input and check button must be is not disable', function () {
      window.onload = () => {}
      init();
      expect(document.getElementById('user_number').getAttribute('disabled')).to.be.equal(null);
      expect(document.getElementById('check').getAttribute('disabled')).to.be.equal(null);
   });

   it('should disable input and check button after game over', function () {
      window.onload = () => {}
      init();
      for (let i = 0; i < initialValues.shots; i++) {
         document.getElementById('user_number').value = initialValues.mysNumbers + 1;
         document.getElementById('check').click();
         const currentShots = parseInt(document.getElementById('shots').innerText);
      }
      expect(document.getElementById('user_number').getAttribute('disabled')).to.be.equal('disabled');
      expect(document.getElementById('check').getAttribute('disabled')).to.be.equal('disabled');
   });

   it('should show message "YOU WIN" if number was guessed', function () {
      window.onload = () => {}
      init();
      document.getElementById('user_number').value = initialValues.mysNumbers;
      document.getElementById('check').click();
      expect(document.getElementById('main_text').innerText.toLowerCase()).to.be.equal('you win');
   });

   it('should show message "NUMBER OUTSIDE THE RANGE" if number greater than max range', function () {
      window.onload = () => {}
      init();
      document.getElementById('user_number').value = initialValues.max + 5;
      document.getElementById('check').click();
      expect(document.getElementById('main_text').innerText.toLowerCase()).to.be.equal('number outside the range');
   });

   it('should show message "NUMBER OUTSIDE THE RANGE" if number less than min range', function () {
      window.onload = () => {}
      init();
      document.getElementById('user_number').value = initialValues.min - 5;
      document.getElementById('check').click();
      expect(document.getElementById('main_text').innerText.toLowerCase()).to.be.equal('number outside the range');
   });

   it('should show message "NUMBER IS NOT INTEGER" if number is not integer', function () {
      window.onload = () => {}
      init();
      document.getElementById('user_number').value = 25.5;
      document.getElementById('check').click();
      expect(document.getElementById('main_text').innerText.toLowerCase()).to.be.equal('number is not integer');
   });

   it('should show message "TRY YOUR LUCK" on start game', function () {
      window.onload = () => {}
      init();
      expect(document.getElementById('main_text').innerText.toLowerCase()).to.be.equal('try your luck');
   });

   it('should show message "YOU DID NOT GUESS RIGHT" if the number was not guessed', function () {
      window.onload = () => {}
      init();
      const number = initialValues.mysNumbers === 100 ? initialValues.mysNumbers - 1 : initialValues.mysNumbers + 1;
      document.getElementById('user_number').value = number;
      document.getElementById('check').click();
      expect(document.getElementById('main_text').innerText.toLowerCase()).to.be.equal('you did not guess right');
   });

   it('should show message "VALUE IS EMPTY" if input value is empty', function () {
      window.onload = () => {}
      init();
      document.getElementById('check').click();
      expect(document.getElementById('main_text').innerText.toLowerCase()).to.be.equal('value is empty');
   });

   it('should show prompt "not enough" if value less than mysterious number', function () {
      window.onload = () => {}
      init();
      document.getElementById('user_number').value = initialValues.mysNumbers - 1;
      document.getElementById('check').click();
      expect(document.getElementById('prompt_text').innerText.toLowerCase()).to.be.equal('not enough');
   });

   it('should show prompt "bit too much" if value less than mysterious number', function () {
      window.onload = () => {}
      init();
      document.getElementById('user_number').value = initialValues.mysNumbers + 1;
      document.getElementById('check').click();
      expect(document.getElementById('prompt_text').innerText.toLowerCase()).to.be.equal('bit too much');
   });

   it('should start new game if button "new game" is pressed', function () {
      window.onload = () => {}
      init();
      document.getElementById('user_number').value = initialValues.mysNumbers + 1;
      document.getElementById('check').click();
      init();
      expect(document.getElementById('main_text').innerText.toLowerCase()).to.be.equal('try your luck');
      expect(parseInt(document.getElementById('shots').innerText)).to.be.equal(initialValues.shots);
   });
});