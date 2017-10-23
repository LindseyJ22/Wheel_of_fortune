$(function(){
class Game {
	constructor(){
		this.puzzles = [
			// "Batman And Robin", 
			// "The Great Gatsby",
			"cat",
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
  } // End of checkWin method

  displayPhrase(){
  	let newPhrase = this.phrase;
  	console.log(newPhrase);
  	for (var i = 0; i < newPhrase.length; i++) {
   		 $('#box' + (i + 1)).attr('data-letter', newPhrase[i]);
   		 if ($('#box' + (i + 1)).attr('data-letter') === null){
   		 	$('#box' + (i + 1)).show();
   		 }
   		 else{
   		 	$('#box' + (i + 1)).hide();
   		 }
   		

  	}	
  }//ends displayPhrase
  displayLetter(){

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
game.displayPhrase();
game.checkWin();
});//ends on load function//