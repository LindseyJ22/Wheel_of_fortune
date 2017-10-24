
class Game {
	constructor(){
		this.guesses = 5;
		this.puzzles = [
			{phrase: "BATMAN", hint: "The dark Knight"}, 
			{phrase: "CHRISTMAS", hint: "a time when the bells jingle"},
			{phrase: "CATS", hint: "Kind of a terrible musical"}
			];
		this.guessedLetters = [];
    	this.incorrectLetters = [];
		this.abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
		let randomNumber = Math.floor(Math.random() * this.puzzles.length);
		this.phrase = this.puzzles[randomNumber].phrase.split('');
		this.hint = this.puzzles[randomNumber].hint.split('');
		this.correctLetters = [];
		console.log(this.puzzles);
		console.log(this.phrase);
	}//ends constructor

	checkWin(){
    	if (this.correctLetters.length == this.phrase.length) {
      		alert('You win!');
      		location.reload();
        }
    } // End of checkWin method

	displayPhrase(){
  		let newPhrase = this.phrase;
  		console.log(newPhrase);
  		for (var i = 0; i < newPhrase.length; i++) {
  			$("#box-container").append(`<div class="col-1 boxes" id="box${i}"></div>`)

  		}
  		$('#hints').html(this.hint);	
  	}//ends displayPhrase
  	displayLetters(){
        $('#letters-display').empty();

    	for (var i = 0; i < this.abcArray.length; i++) {
      		if (this.correctLetters.includes(this.abcArray[i]) || this.incorrectLetters.includes(this.abcArray[i])){
        		$('#letters-display').append(`<div class="col-1 abcs" data-letter="${this.abcArray[i]}">${this.abcArray[i].toUpperCase()}</div>`);
       		}else{
            	$('#letters-display').append(`<div class="col-1 abcs" data-letter="${this.abcArray[i]}"> ${this.abcArray[i].toUpperCase()}</div>`);
        	}
      	}
	}
 	guessLetter(letter){
  		if(this.correctLetters.includes(letter) || this.incorrectLetters.includes(letter)){
          alert("You've already guessed that letter!");
     		// this.guessLetter();
        }else{
        	if(this.phrase.includes(letter)){
        		let indexes = [];
        		for(let i = 0; i < this.phrase.length; i++){
        		  if(this.phrase[i] === letter)
        		  	indexes.push(i);
        		}
        		for(let i = 0; i < indexes.length; i++){
        			$('#box' + (indexes[i])).html(letter);
        			this.correctLetters.push(letter);
        		}
        	}else{
        		this.incorrectLetters.push(letter);
        		console.log(this.incorrectLetters);
        		this.guesses -= 1;
        		this.displayGuesses();

        	}
        }
        this.loseGame();
        this.checkWin();
    }//ends guess letter method
    loseGame(){
    	if(this.incorrectLetters.length === 5){
    		alert('you suck');
    		location.reload();
    	}
    }//ends loseGame
    displayGuesses(){
    	$('#guessesLeft').html(this.guesses);
    }//ends displayGuesses
	 		
}//ends game class
$(function(){
	$(document).on('click', '.abcs', function(){
      // let letter = $(this).data('letter');
      let letter = $(this).data('letter');
      game.guessLetter(letter.toUpperCase());
  	});
	let game = new Game();
	game.displayLetters();
	game.displayPhrase();
	game.displayGuesses();
});//ends on load function//