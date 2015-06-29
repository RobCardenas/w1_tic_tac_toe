// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
 	var turns = 'X';
	var xColor = "#1772e8";
	var oColor = "#e15258";

	// This function sets the background colors or each player

	function changeColor() {
		var boxes = document.querySelectorAll(".box");
		for (var i = 0; i < boxes.length; i += 1) {
		  if( turns === 'X' ) {
		       boxes[i].style.backgroundColor = oColor;
		  } else {
		       boxes[i].style.backgroundColor = xColor;
		  }
		}
	}

	// This function decides wether to set an X or an O.

	function changeTurn() {
		if( turns === 'X' ) {
		   turns = 'O';
		} else {
		   turns = 'X';
		}
	}

	function click() {
	    if ( this.id === "box1" ) {
	      if (document.getElementById("box1").innerHTML === ""){ 
	           document.getElementById("box1").innerHTML = turns;
	           changeTurn();
	           changeColor();
	      }
	 } else if ( this.id === "box2" ) {
	      if (document.getElementById("box2").innerHTML === ""){ 
	           document.getElementById("box2").innerHTML = turns;
	           changeTurn();
	           changeColor();
	      }
	 } else if ( this.id === "box3" ) {
	      if (document.getElementById("box3").innerHTML === ""){ 
	           document.getElementById("box3").innerHTML = turns;
	           changeTurn();
	           changeColor();
	      }
	 } else if ( this.id == "box4" ) {
	      if (document.getElementById("box4").innerHTML === ""){ 
	           document.getElementById("box4").innerHTML = turns;
	           changeTurn();
	           changeColor();
	      }
	 } else if ( this.id == "box5" ) {
	      if (document.getElementById("box5").innerHTML === ""){ 
	           document.getElementById("box5").innerHTML = turns;
	           changeTurn();
	           changeColor();
	      }
	 } else if ( this.id == "box6" ) {
	      if (document.getElementById("box6").innerHTML === ""){ 
	           document.getElementById("box6").innerHTML = turns;
	           changeTurn();
	           changeColor();
	      }
	 } else if ( this.id == "box7" ) {
	      if (document.getElementById("box7").innerHTML === ""){ 
	           document.getElementById("box7").innerHTML = turns;
	           changeTurn();
	           changeColor();
	      }
	 } else if ( this.id == "box8" ) {
	      if (document.getElementById("box8").innerHTML === ""){ 
	           document.getElementById("box8").innerHTML = turns;
	           changeTurn();
	           changeColor();
	      }
	 } else if ( this.id == "box9" ) {
	      if (document.getElementById("box9").innerHTML === ""){ 
	           document.getElementById("box9").innerHTML = turns;
	           changeTurn();
	           changeColor();
	      }
	 } 
	}

	document.getElementById("box1").onclick = click;
	document.getElementById("box2").onclick = click;
	document.getElementById("box3").onclick = click;
	document.getElementById("box4").onclick = click;
	document.getElementById("box5").onclick = click;
	document.getElementById("box6").onclick = click;
	document.getElementById("box7").onclick = click;
	document.getElementById("box8").onclick = click;
	document.getElementById("box9").onclick = click;

	// This code resets the page by clicking the reset button

	var reset = document.querySelector("#reset");

	reset.addEventListener("click", function(event) {   
	event.preventDefault();
	window.location.reload()
	});
});
