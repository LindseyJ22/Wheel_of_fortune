
class Game {
	constructor(){
		this.puzzles = [
			{phrase: "BATMAN", hint: "The dark Knight"}, 
			{phrase: "CHRISTMAS", hint: "A time when the bells jingle"},
			{phrase: "CATS", hint: "Kind of a terrible musical"},
			{phrase: "NAGGERS", hint: "People who annoy you"},
			{phrase: "DANGER", hint: "It's my middle name"},
			{phrase: "KERMIT", hint: "What piggies love"},
			{phrase: "YODA", hint: "Wise beyond his years he is"}
			];
			// this.startGame();
	}//ends constructor

	startGame(){
		this.guesses = 5;
		this.guessedLetters = [];
    	this.incorrectLetters = [];
		this.abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
		let randomNumber = Math.floor(Math.random() * this.puzzles.length);
		this.phrase = this.puzzles[randomNumber].phrase;
		this.splitPhrase = this.puzzles[randomNumber].phrase.split('');
		this.hint = this.puzzles[randomNumber].hint.split('');
		this.correctLetters = [];
		console.log(this.puzzles);
		console.log(this.phrase);
		this.resetGame();
		this.displayPhrase();
	}

	resetGame(){
		let newPhrase = this.splitPhrase;
  		console.log(newPhrase);
  		for (var i = 0; i < newPhrase.length; i++) {
  			$("#box-container").empty();
  		}	
	}

	checkWin(){
    	if (this.correctLetters.length == this.splitPhrase.length) {
      		alert('You win!');
      		this.startGame();
        }
    } // End of checkWin method

	displayPhrase(){
  		let newPhrase = this.splitPhrase;
  		console.log(newPhrase);
  		for (var i = 0; i < newPhrase.length; i++) {
  			$("#box-container").append(`<div class="col-1 w-50 boxes" id="box${i}"></div>`);

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
        	if(this.splitPhrase.includes(letter)){
        		let indexes = [];
        		for(let i = 0; i < this.splitPhrase.length; i++){
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
    		this.startGame();
    	}
    }//ends loseGame
    displayGuesses(){
    	$('#guessesLeft').html(this.guesses);
    }//ends displayGuesses
    solveThePuzzle(){
    	let solve = prompt('Solve the Puzzle!').toUpperCase();
    	console.log(this.solvedArray);
    	console.log(this.phrase);
    	if(solve === this.phrase){
    		alert(' You Win');
    	}
    }
	 		
}//ends game class
$(function(){
	$(document).on('click', '.abcs', function(){
      let letter = $(this).data('letter');
      game.guessLetter(letter.toUpperCase());
  	});
  	$('#solvePuzzle').on('click',function(){
  		game.solveThePuzzle();
  	});
	let game = new Game();
	game.startGame();
	game.displayLetters();
	// game.displayPhrase();
	game.displayGuesses();
});//ends on load function//