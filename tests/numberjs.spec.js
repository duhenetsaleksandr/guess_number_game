describe('On init', () => {
    it('input validation: value = 0', () => {
        init(0, 0, 0);
        expect(initialValues.min).to.equal (0);
        expect(initialValues.max).to.equal (0);
        expect(initialValues.shots).to.equal (0);
    })
    it('input validation: min < max', () => {
        init(5, 1, 1);
        expect(initialValues.min).to.equal (1);
        expect(initialValues.max).to.equal (1);
        expect(initialValues.shots).to.equal (1);
    })
    it('input validation: min, max, shots < 0', () => {
        init(-50, -10, -1);
        expect(initialValues.min).to.equal (-50);
        expect(initialValues.max).to.equal (-10);
        expect(initialValues.shots).to.equal (-1);
    })
    it('input validation: shots >15', () => {
        init(10, 500, 16);
        expect(initialValues.min).to.equal (10);
        expect(initialValues.max).to.equal (500);
        expect(initialValues.shots).to.equal (16);
    })
    it('input validation:  min, max > 200', () => {
        init(300, 450, 12);
        expect(initialValues.min).to.equal (450;
        expect(initialValues.max).to.equal (300);
        expect(initialValues.shots).to.equal (12);
    })
    it('Valid data minimum', () => {
        init(1, 1, 1);
        expect(initialValues.min).to.equal (1);
        expect(initialValues.max).to.equal (1);
        expect(initialValues.shots).to.equal (1);
    })
    it('Valid data maximum', () => {
        init(198, 199, 15);
        expect(initialValues.min).to.equal (198);
        expect(initialValues.max).to.equal (199);
        expect(initialValues.shots).to.equal (15);
    })
});


describe('On show', () => {
    it('input validation if the entered value is greater than max less min', () => {
        show('Number outside the range', 'value must be in the range', 15);
        expect(mainText.innerText).to.equal ('Number outside the range');
        expect(promptText.innerText).to.equal ('value must be in the range');
        expect(shotsLeft.innerText).to.equal (15);
    })
    it('input validation if the entered value is not an integer', () => {
        show('Number is not integer', 'only integer', 5);
        expect(mainText.innerText).to.equal ('Number is not integer');
        expect(promptText.innerText).to.equal ('only integer');
        expect(shotsLeft.innerText).to.equal (5);
        })
    it('input validation the entered number is greater than random', () => {
        show('You did not guess right', 'bit too much', 5);
        expect(mainText.innerText).to.equal ('You did not guess right');
        expect(promptText.innerText).to.equal ('bit too much');
        expect(shotsLeft.innerText).to.equal (5);
    })
    it('input validation the entered number is greater than random', () => {
        show('You did not guess right', 'bit too much', 5);
        expect(mainText.innerText).to.equal ('You did not guess right');
        expect(promptText.innerText).to.equal ('bit too much');
        expect(shotsLeft.innerText).to.equal (5);
    })
    it('input validation the entered number is less than the random number', () => {
        show('You did not guess right', 'not enough', 5);
        expect(mainText.innerText).to.equal ('You did not guess right');
        expect(promptText.innerText).to.equal ('not enough');
        expect(shotsLeft.innerText).to.equal (5);
    })
    it('guessed', () => {
        show('You win', `mystery number is ${initialValues.mysNumbers}`, 2);
        expect(mainText.innerText).to.equal ('You win');
        expect(promptText.innerText).to.equal (`mystery number is ${initialValues.mysNumbers}`);
        expect(shotsLeft.innerText).to.equal (2);
    })
    it('lost', () => {
        show('You did not guess right', 'try again', 0);
        expect(mainText.innerText).to.equal ('You did not guess right');
        expect(promptText.innerText).to.equal ('try again');
        expect(shotsLeft.innerText).to.equal (0);
    })
    it('attempts exhausted', () => {
        show('Game over', 'try again', 0);
        expect(mainText.innerText).to.equal ('Game over');
        expect(promptText.innerText).to.equal ('try again');
        expect(shotsLeft.innerText).to.equal (0);
    })
});

describe('validation of input data to compute a random number', () => {
    it('input validation: min = max', () => {
        expect(randomInteger(1,1)).to.equal (1,1);
    })
    it('input validation: min < max', () => {
        expect(randomInteger(5,1)).to.equal (5,1);
    })
    it('input validation: min and max =0', () => {
        expect(randomInteger(0,0)).to.equal (0,0);
    })
    it('input validation: min and max > 200', () => {
        expect(randomInteger(201,205)).to.equal (201,205);
    })
    it('input validation: min and max > 200', () => {
        expect(randomInteger(150,190)).to.equal (150,190);
    })

});

