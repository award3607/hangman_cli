var Letter = require('./letter.js');

//each word will be made up of letter objects
//word will get a word passed in
//it will then build an array of letter objects that represent the word
//displayWord() will print each letter to the console. if letter.visible=false, it will print an underscore instead
//evalLetter(letter) will check to see if the letter is in the word. if it is, it will set each letter that matches
//the guessed letter to visible by using letter.reveal()


var Word = function(word) {
	this.word = word;
	this.length = this.word.length;
	this.letters = [];

	this.getLetters = function() {
		this.word.split().forEach(function(letter) {
			let letterObj = new Letter(letter);
			this.letters.push(letterObj);
		});
	}();

	this.display = function() {
		let displayString = "";
		this.letters.forEach(function(letter) {
			if(letter.visible) {
				displayString += Letter.letter + " ";
			}
			else {
				displayString += "_ ";
			}
		});
		console.log(displayString);
		return this;
	}

	this.evalGuess = function(guessLetter) {
		let result = false;
		this.letters.forEach(function(letter) {
			if(guessLetter === letter.letter) {
				letter.reveal();
				result = true;
			}
		});
		return result;
	}

	this.guessed = function() {
		let result = false;
		this.letters.forEach(function(letter) {
			if(!letter.visible) {
				//immediately return false if a letter is not visible (hidden)
				return false;
			}
			else {
				result = true;
			}
		});
		return result;
	}
}

module.exports = Word;