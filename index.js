$(function(){
class Game {
	constructor(){
		this.puzzles = [
			"Batman And Robin", 
			"The Great Gatsby",
			"Naggers",
			];
		this.phrase = this.puzzles[1];
		this.correctGuess = [];
		console.log(this.puzzles);
		console.log(this.phrase);

	}//ends constructor
	guessLetter(letter){
		if (this.phrase.includes(letter)){
			this.correctGuess.push(letter);

		}
	}//ends guess letter
	checkWin(){
		if(this.phrase.length === correctGuess){
			alert('you won!');
		}
	}
}//ends games
let game = new Game();

});//ends on load function//