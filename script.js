	var squareNum = 6;	
	var color = generateRandomColor(squareNum);
	var square = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay")
	var display = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	var btn = document.querySelectorAll(".btn");

	//to display right color  at "RGB(r, g, b) text on top"
	colorDisplay.textContent = pickedColor;

	init();

	function init(){

		buttonSetup();

		squareColor();

		reset();
	}

		//"Play Again?" and "New Color" button event listener
	resetButton.addEventListener("click", function(){
		//new color genrated
		reset();
	});

	function buttonSetup (){
		for(var i=0; i<btn.length; i++){
			
			btn[i].addEventListener("click", function(){
			btn[0].classList.remove("selected");
			btn[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ? squareNum =3 : squareNum=6;
			reset();
			});

		}
	}

	function squareColor(){

		//looping to add background color to square
		for (var i = 0; i < square.length; i++) {

			//add initial color to square
			square[i].style.backgroundColor = color[i];

			//add click listener to square
			square[i].addEventListener("click", function(){
				var clickedColor = this.style.backgroundColor;

				if (clickedColor === pickedColor) {

					display.textContent = "Correct";
					changeColor(pickedColor);
					h1.style.backgroundColor = pickedColor;
					resetButton.textContent = "Play Again?";
				} 
				else {
					this.style.backgroundColor = "#232323";
					display.textContent = "Try Again";
				}
			});
		}
	}


	function reset(){
		color = generateRandomColor(squareNum);
			//pcik new random color from array
		pickedColor = pickColor();
		//change color text display
		colorDisplay.textContent = pickedColor;

		display.textContent = "";
		resetButton.textContent = "New Color";

		//set random color for easy and hard mode
		for (var i = 0; i < square.length; i++) {

			if(color[i]){
				square[i].style.display = "block";
				square[i].style.backgroundColor = color[i];
			}
			else{
					square[i].style.display = "none";
			}

			h1.style.backgroundColor = "steelblue";

		}
	}	

	//square background change color functions
	function changeColor(colors){

		for (var i = 0; i < square.length; i++) {

			square[i].style.backgroundColor = colors;
		}
	}

	//correct color picked function
	function pickColor(){
		var random = Math.floor(Math.random() * color.length);
		return color[random];
	}

	//to generate random color
	function generateRandomColor(num){
		var arr = [];

		for(var i = 0 ; i<num; i++){
			arr.push(randomColor());
		}

		return arr;

		function randomColor(){
			//generate random red color
			var r = Math.floor(Math.random()*256);
			//generate random green color
			var g = Math.floor(Math.random()*256);
			//generate random blue color
			var b = Math.floor(Math.random()*256);

			return "rgb(" + r +", " + g + ", " + b + ")";
		}
	}