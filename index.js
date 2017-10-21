$(function(){
class Game {
	constructor(){
		this.puzzles = [
			"Batman And Robin", 
			"The Great Gatsby",
			"Naggers",
			];
		this.phrase = this.puzzles[Math.floor(Math.random() * this.puzzles.length)].split('');
		this.correctLetters = [];
		this.phraseLetters =  this.phrase.filter(function(elem, index, self) 
		{
			return index == self.indexOf(elem);
		})
		console.log(this.puzzles);
		console.log(this.phrase);
	}//ends constructor
	  checkWin(){
    if (this.correctLetters.length == this.phraseLetters.length) {
      alert('You win!');
    }
    else {
      this.guessLetter();
    }
  } // End of checkIfWon method

  displayClue(){

  }

  guessLetter(){
    let letter = prompt('Guess a letter!');


    if(this.phrase.includes(letter)){
      if(this.correctLetters.includes(letter)){
        alert("You've already guessed that letter!");
        this.guessLetter();
      }
      else{
      this.correctLetters.push(letter);
      }
    }

    this.checkWin();

  }




}
let game = new Game();
game.checkWin();
});//ends on load function//