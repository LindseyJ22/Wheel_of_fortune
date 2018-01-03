
class Game {
	constructor(){
		this.puzzles = [
			{phrase: "BATMAN", hint: "The dark Knight"}, 
			{phrase: "CHRISTMAS", hint: "A time when the bells jingle"},
			{phrase: "CATS", hint: "Kind of a terrible musical"},
			{phrase: "NAGGERS", hint: "People who annoy you"},
			{phrase: "DANGER", hint: "It's my middle name"},
			{phrase: "KERMIT", hint: "What piggies love"},
			{phrase: "YODA", hint: "Wise beyond his years he is"},
			{phrase: "YOKO", hint: "Somebody who exterminates Beetles"},
			{phrase: "JIBLETS", hint: "Something that turkeys have that sounds gross"},
			{phrase: "MOIST", hint: "The grossest sounding word"},
			// {phrase: "END", hint: "end of game"}

			];
		this.puzzleNumber = 0;
		this.round = 1;
	}//ends constructor

	startGame(){
		this.guesses = 10;
		this.guessedLetters = [];
    this.incorrectLetters = [];
		this.abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
		this.phrase = this.puzzles[this.puzzleNumber].phrase;
		this.splitPhrase = this.puzzles[this.puzzleNumber].phrase.split('');
		this.hint = this.puzzles[this.puzzleNumber].hint.split('');
		this.correctLetters = [];
		this.solveArray = [];
		console.log(this.puzzles);
		console.log(this.phrase);
		this.resetGame();
		this.displayPhrase();
		this.displayRound();
	}//ends start game

	resetGame(){
		let newPhrase = this.splitPhrase;
  		console.log(newPhrase);
  		for (var i = 0; i < newPhrase.length; i++) {
  			$("#box-container").empty();
  		}	
	}//ends reset game

	checkWin(){
    	if (this.correctLetters.length == this.splitPhrase.length || this.solveArray == this.phrase) {
      		this.round += 1;
      		if(this.round > 10){
      			$('#alertEnd').show();
      		}else{
      		    $('#alertWin').show();
      			this.puzzleNumber += 1;
      			this.displayRound();
      		}
        }
    } // End of checkWin method

    displayRound(){
    	$('#roundTracker').html(this.round);
    }//ends displayROund

	displayPhrase(){
  		let newPhrase = this.splitPhrase;
  		console.log(newPhrase);
  		for (var i = 0; i < newPhrase.length; i++) {
  			$("#box-container").append(`<div class="col-1 w-50 boxes" id="box${i}" style='padding-left:6px;'></div>`);
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
    	if(this.incorrectLetters.length === 10){
    		$('#alertLoss').show();
    	}
    }//ends loseGame
   
    displayGuesses(){
    	$('#guessesLeft').html(this.guesses);
    }//ends displayGuesses
    
    solveThePuzzle(){
    	let solve = prompt('Solve the Puzzle!').toUpperCase();
    	if(solve === this.phrase){
    		this.solveArray.push(solve);
    		this.checkWin();
    	}
    }	 		
}//ends game class

$(function(){
	$(document).on('click', '.abcs', function(){
      let letter = $(this).data('letter');
      game.guessLetter(letter.toUpperCase());
  	});
  	$('#solvePuzzle').on('click', function(){
  		game.solveThePuzzle();
  	});
  	$('#startRound').on('click', function(){
  		game.startGame();
  		$('#alertWin').hide();
  	});
  	$('#startNewGame').on('click', function(){
  		location.reload();
  		$('#alertLoss').hide();
  	});
  	$('#endGame').on('click', function(){
  		location.reload();
  		$('#alertEnd').hide();
  	});
	let game = new Game();
	game.startGame();
	game.displayLetters();
	game.displayGuesses();
});//ends on load function//