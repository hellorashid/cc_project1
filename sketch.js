function setup() { 
  createCanvas(600, 600);
	
} 

var lineX = 0; 
var lineY = 0; 


var num = 0; 

function draw() { 
  background(220);

	
	 lineX =0; 
	 noFill(); 
	for ( var i = 0; i < 60; i++) { 
				stroke(255,5, 100);  
			bezier(lineX, 0, 10, 10, 90, 90, mouseX, mouseY);
			lineX += 10; 
	} 
	
	
	lineX = 0; 
	for ( var i = 0; i < 60 ; i++) { 
				stroke(255,5, 100); 

			bezier(lineX, 600, 500 , 500 , mouseX/2, mouseY/2, mouseX, mouseY);
			lineX += 10; 
	} 
	
	lineY = 0; 
	for ( var i = 0; i < 60 ; i++) { 
			stroke(255,5, 100); 

			bezier(0, lineY, 100 , 500 , mouseX/2, mouseY/2, mouseX, mouseY);
			lineY += 10; 
	} 
	
	lineY = 0; 
	for ( var i = 0; i < 60 ; i++) { 
	stroke(255,5, 100); 
			bezier(600, lineY, 100 , 500 , mouseX/2, mouseY/2, mouseX, mouseY);
			lineY += 10; 
	} 
	
		//ellipse(mouseX, mouseY, 55, 55);
}

