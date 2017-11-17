	


//back end variables

			var words =["gainsboro","light gray","silver","gray","dark gray","dim gray","jet","platinum","battleship gray","gun metal","nickel","marengo"];
			var backWord=["gainsboro","lightgray","silver","gray","darkgray","dimgray","jet","platinum","battleshipgray","gunmetal","nickel","marengo"];
			var word;
			var guesses =[];
			var wins = 0;
			var lives = 5;
			var blanks;
			var test =false;
			var test2=false;
			var y;
			var losses=0;


			//All the functions for the actual game

initialize();
			function randomWord(){

				//Generates a random number to call for a word from the words array
				var x = Math.floor(words.length*Math.random());
				
				word = words[x].split("");

				console.log(word);

				blanks = word.map(function(x){

					if(x == " "){
						return'\xa0\xa0\xa0\xa0';
					}
					return "__  "
				});

				//sets the non html colors
				if(x == 8){
					y = "#848482";
				}else if(x == 6){
					y = "#343434";
				}else if(x == 7){
					y = "#E5E4E2"
				}else if(x == 9){
					y = "#2a3439";
				}else if( x == 10){
					y = "#727472";
				}else if(x == 11){
					y = "#4C5866";
				}else{
					y = backWord[x];
				}
				
				console.log(y);
				document.getElementById("colorBox").style.backgroundColor = y;

			};



			function game(){

				//Waits for a key to be pressed and then records it into guesses
				var input = event.key;
				console.log(input);


				// checks all previous guesses to see if it has been used
				for(i=0;i<guesses.length;i++){

					//if its a duplicate then dont add it
					if(input == guesses[i]){

						//tells webpage its a duplicate
						test = true;
						alert("duplicate");
					};
				};

				//if its not a duplicate then put it in your guesses
				if(test == false){
					guesses.push(input);

					//checks for every letter in the array to see if one matches then puts it into the blanks
					for(w=0;w<word.length;w++){

						if(word[w] == input){

							//setting the matching letter position
							blanks[w] = input;

							// telling the webpage that it is not a bad guess
							test2 = true;

							//prints it to html 
							

						};
					};

					//if it doesnt match and its not a duplicate then 
					if(test2 == false && test == false){
						lives--;
					};

				};

				test = false;
				test2 = false;
				console.log(blanks);
				console.log(word);
				console.log(lives);




					if(compare(word,blanks)){
					    alert("congrats");
					    wins++;
					    restart();
					}else if(lives == 0){
						alert("Looks like you lost");
						losses++;
						restart();
					};


				print();
			};
			
console.log(blanks);

//This is a "function" that creates a new method for an array to compare the two
			function compare(arr1,arr2) {
				for(i=0;i<arr1.length;i++){
					if(arr1[i] != arr2[i] && arr1[i] != " "){
						console.log(blanks);
						return false;

					};

				};
			    return true;
			};

function initialize(){
	
	randomWord();
	print();

 };


function restart(){
	initialize();
	word;
	guesses =[];
	lives = 5;
	blanks;
	test =false;
};



function print(){

	document.getElementById("word").innerHTML="";
	document.getElementById("fails").innerHTML=guesses;
	document.getElementById("attempts").innerHTML=lives;
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("losses").innerHTML=losses;

	for(e=0;e<blanks.length;e++){
		document.getElementById("word").append(blanks[e]);
	};


};





