var Letter = require('./letter.js');

//each word will be made up of letter objects
//word will get a word passed in
//it will then build an array of letter objects that represent the word
//displayWord() will print each letter to the console. if letter.visible=false, it will print an underscore instead
//evalLetter(letter) will check to see if the letter is in the word. if it is, it will set each letter that matches
//the guessed letter to visible by using letter.reveal()


function Word(word) {
	this.word = word;
	this.length = this.word.length;
	this.letters = [];
	let _this = this;
	this.word.split("").forEach(function(letter) {
		let letterObj = new Letter(letter);
		this.letters.push(letterObj);
	}, this);
	// console.log(this.word);
	// console.log(this);

	this.getDisplayString = function() {
		let displayString = "";
		this.letters.forEach(function(letter) {
			if(letter.visible) {
				displayString += letter.letter + " ";
			}
			else {
				displayString += "_ ";
			}
		}, this);
		return displayString;
	}

	this.evalGuess = function(guessLetter) {
		let result = false;
		this.letters.forEach(function(letter) {
			if(guessLetter.toLowerCase() === letter.letter.toLowerCase()) {
				letter.reveal();
				// console.log(`${letter.letter} is now visible: ${letter.visible}`);
				result = true;
			}
		});
		return result;
	}

	this.guessed = function() {
		let result = false;
		let hiddenLetters = this.letters.filter(function(letter) {
			// console.log(`Letter ${letter.letter} is visible: ${letter.visible}`);
			return !letter.visible;
		});
		// console.log(hiddenLetters.length);
		if(hiddenLetters.length < 1) {
			// console.log("Inside the test for an empty array of hiddenLetters");
			result = true;
		}
		// console.log(`Guessed is: ${result}`);
		return result;
	}
}

module.exports = Word;