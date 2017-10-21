$(function(){

	constructor(clues){
		this.clueArray = clues;
		this.clue = clues [math.random() * clueArray.length];
		
		this.puzzles = [
		"Batman And Robin", 
		"The Great Gatsby",
		"Naggers",
		];
	}
});//ends on load function//