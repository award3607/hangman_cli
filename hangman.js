//requires
var inquirer = require('inquirer');
var Word = require('./word.js');

//globals
var wordList = ["Ford", "Chevrolet", "Ferrari", "Lamborghini", "Maserati", "BMW", "Audi", "Mercedes", "Porsche", "Lotus", "McLaren",
					"Honda", "Toyota", "Mitsubishi", "Subaru", "Nissan", "Datsun", "Mazda", "Volkswagen"];
var Game = function(words) {
	this.words = words;
	this.wins = 0;
	this.wordToGuess = "";
	this.guessesRemaining = 15;
	this.lettersGuessed = [];

	this.initGame = function() {
		this.wins = 0;
		this.initRound();
	}();

	this.initRound = function() {
		this.wordToGuess = new Word(this.selectRandomItem(this.words));
		this.guessesRemaining = this.wordToGuess.length + 10;
		this.lettersGuessed = [];
		wordToGuess.display();
		//use inquirer to prompt user for input
	}

	this.evalGuess = function(letter) {
		if(this.lettersGuessed.includes(letter)) {
			console.log(`You already guessed ${letter}!`);
			return;
		}
		else if(this.wordToGuess.evalGuess(letter)) {
			console.log(`Good guess! ${letter.toUpperCase()} is in the word.`);
			this.wordToGuess.display();
		}
		else {
			console.log(`Try again! ${letter.toUpperCase()} is not in the word.`);
		}
		this.guessesRemaining--;
		this.lettersGuessed.push(letter);
		this.evalWinLose();
	}

	this.evalWinLose = function() {
		if (this.wordToGuess.guessed() && this.guessesRemaining > 0) {
			this.wins++;
			console.log("Congratulations, you won!");
			//prompt to play again
			// this.initRound();
		}
		else if (this.guessesRemaining < 1) {
			console.log(`Sorry, you lost. The word was ${this.wordToGuess.word}`);
			//prompt to play again
			// this.initRound();
		}
	},


	this.selectRandomItem = function(arr) {
		var item = arr[((Math.floor(Math.random() * arr.length)))];
		// console.log(item);
		return item;
	},


};

var game = new Game(wordList);

