function setup() {
    createCanvas(600, 600);
    background(220);
    frameRate(30);
}
var lineX = 0; // X & Y position variables, used for arms
var lineY = 0;
var num = 0;
var rand; // Random Number variable
var newArm = new Arm();
var armArray = [];
var rectRotate = 0;
var centerAxis = new p5.Vector(300, 300);
var arrayLength = 0; // Number of Active Arms on Screen
var purple = '#6A31E5';
var red = '#E52149';
var lineColor = '#6A31E5'; // Defines colors of all lines
var circleColor = '#1A0221';
var backGround = true; // Declares if background should be redrawn. 
var colorArray = ['#6A31E5', '#1793DE', '#0BDE85' ]; 
var colorMarker = 0; 
function draw() { 
    //Togle Background with SPACE bar
    if (keyIsDown(32)) {
        backGround = !backGround;
    }
    if (backGround) {
        background(220)
    };
    lineX = 0;
    noFill();
    //Change Colors 
    lineColor = '#E52149';
    if (keyCode === RIGHT_ARROW) {
        lineColor = '#6A31E5'; 
    };
    
    if (keyCode === UP_ARROW) {
        circleColor = '#080336'
    };
    // create new Arm object, and add new arms on mousePress
    var newArm = new Arm();
    armArray.push(newArm);
    for (i in armArray) {
        armArray[i].randTop(lineColor);
        armArray[i].randBottom(lineColor);
        armArray[i].randLeft(lineColor);
        armArray[i].randRight(lineColor);
    }
    if (armArray.length > arrayLength) {
        armArray.pop();
    };
    fill(circleColor);
    noStroke();
    push();
    rectMode(CENTER);
    translate(300, 300);
    rotate(PI + rectRotate);
    rectRotate += 0.01;
    rect(0, 0, 100, 200);
    rotate(PI + rectRotate);
    //rectRotate += 0.001; 
    rect(0, 0, 100, 200);
    rotate(PI + rectRotate);
    //rectRotate -= 0.001; 
    rect(0, 0, 100, 200);
    pop();
    // CIRCLE
    ellipse(width / 2, height / 2, 200, 200);
    // Arcs 
    push();
    noFill();
    translate(300, 300);
    stroke(lineColor);
    rotate(PI + rectRotate);
    rectRotate += 0.05;
    arc(0, 0, 60, 60, HALF_PI, PI);
    rotate(PI + rectRotate);
    rectRotate += 0.05;
    arc(0, 0, 70, 70, HALF_PI, PI * 1.5);
    rotate(PI - rectRotate);
    arc(0, 0, 120, 120, HALF_PI, PI * 1.5);
    pop();
    console.log(rectRotate);
}
// ---- EVENT LISTENERS -------------------------------//
var loopToggle = true;
// Turns off the draw() loop, PAUSES animation
function mousePressed() { 
    console.log("MOUSE PRESSED");
    if (loopToggle) {
        loop();
    }
    else {
        noLoop();
    }
    loopToggle = !loopToggle;
    

}
// Adds mode arms on ENTER keypress, deletes on BACKSPACE
function keyPressed() {
    if (keyCode === ENTER) {
        arrayLength += 2;
    }
    else if (keyCode === BACKSPACE) {
        arrayLength -= 2;
        console.log("BACKWARDS!"); // <- Doesn't always work
    }
}
// ----- Begin Arm Defintion ---------------------//
function drawArms() {
    lineY = 0;
    for (var i = 0; i < 60; i++) {
        stroke(255, 5, 100);
        bezier(600, lineY, 100, 500, mouseX, mouseY / 2, mouseX, mouseY);
        lineY += 10;
    }
}

function Arm() {
    // Contructor function for Arm objects. Has no member variables. Methods defined below. 
}
Arm.prototype.randTop = function (lineColor) {
    rand = int(random(60));
    lineX = 0;
    noFill();
    stroke(lineColor);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(lineX, 0, 10, 10, mouseX / 2, mouseY / 2, 300, 300);
        }
        lineX += 10;
    }
};
Arm.prototype.randBottom = function (lineColor) {
    rand = int(random(60));
    lineX = 0;
    noFill();
    stroke(lineColor);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(lineX, 600, 500, 500, mouseX / 2, mouseY / 2, 300, 300);
        }
        lineX += 10;
    }
};
Arm.prototype.randLeft = function (lineColor) {
    rand = int(random(60));
    lineY = 0;
    noFill();
    stroke(lineColor);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(0, lineY, 100, 500, mouseX / 2, mouseY / 2, 300, 300);
        }
        lineY += 10;
    }
};
Arm.prototype.randRight = function (lineCOlor) {
    rand = int(random(60));
    lineY = 0;
    noFill();
    stroke(lineColor);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(600, lineY, 500, 200, mouseX / 2, mouseY / 2, 300, 300);
        }
        lineY += 10;
    }
}