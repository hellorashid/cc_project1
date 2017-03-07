function setup() {
    createCanvas(600, 600);
    background(220);
    frameRate(30);
}
var lineX = 0;
var lineY = 0;
var num = 0;
var rand;
var newArm = new Arm();
var armArray = [];
var rectRotate = 0;
var centerAxis = new p5.Vector(300, 300);

function draw() {
    background(220);
    lineX = 0;
    noFill();
    var newArm = new Arm();
    armArray.push(newArm);
    for (i in armArray) {
//        armArray[i].randTop();
//        armArray[i].randBottom();
//        armArray[i].randLeft();
//        armArray[i].randRight();
    }
    if (armArray.length > 20) {
        armArray.pop();
    }
    
    //drawArms(); 
    //    for (var i = 0; i < 60; i++) {
    //        stroke(255, 5, 100);
    //        bezier(lineX, 0, 10, 10, 90, 90, mouseX, mouseY);
    //        lineX += 10;
    //    }
    //    lineX = 0;
    //    for (var i = 0; i < 60; i++) {
    //        stroke(255, 5, 100);
    //        bezier(lineX, 600, 500, 500, mouseX / 2, mouseY / 2, mouseX, mouseY);
    //        lineX += 10;
    //    }
    //    lineY = 0;
    //    for (var i = 0; i < 60; i++) {
    //        stroke(255, 5, 100);
    //        bezier(0, lineY, 100, 500, mouseX / 2, mouseY / 2, mouseX, mouseY);
    //        lineY += 10;
    //    }
    //    lineY = 0;
    //    for (var i = 0; i < 60; i++) {
    //        stroke(255, 5, 100);
    //        bezier(600, lineY, 100, 500, mouseX / 2, mouseY / 2, mouseX, mouseY);
    //        lineY += 10;
    //    }
    fill(0);
    noStroke();
    push();
        rectMode(CENTER);
        translate(300, 300);
        rotate(PI +  rectRotate );
        rectRotate += 0.05; 
        rect(0, 0, 100, 200);
    
        rotate(PI + rectRotate);
        rectRotate += 0.05; 
        rect(0, 0, 100, 200);
    
        rotate(PI + rectRotate);
        rectRotate -= 0.05; 
        rect(0, 0, 100, 200);
    pop();
    
    // CIRCLE
    ellipse(width / 2, height / 2, 200, 200);
    
    // Arcs 
    push(); 
    
    noFill(); 
    translate(300, 300);

    stroke(255, 5, 100);
    rotate(PI + rectRotate);
    rectRotate += 0.05; 
    arc(0, 0, 60, 60, HALF_PI, PI);
    
    rotate(PI + rectRotate);
    rectRotate += 0.05; 
    arc(0, 0, 70, 70, HALF_PI, PI * 1.5);
    
    rotate(random() );
    rectRotate += 0.05; 
    arc(0, 0, 90, 90, HALF_PI, PI * 1.5);

    pop(); 
    console.log(rectRotate); 

}
// ------------------------------- END ------------------//
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
Arm.prototype.randTop = function () {
    rand = int(random(60));
    lineX = 0;
    noFill();
    stroke(255, 5, 100);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(lineX, 0, 10, 10, mouseX / 2, mouseY / 2, 300, 300);
        }
        lineX += 10;
    }
};
Arm.prototype.randBottom = function () {
    rand = int(random(60));
    lineX = 0;
    noFill();
    stroke(255, 5, 100);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(lineX, 600, 500, 500, mouseX / 2, mouseY / 2, 300, 300);
        }
        lineX += 10;
    }
};
Arm.prototype.randLeft = function () {
    rand = int(random(60));
    lineY = 0;
    noFill();
    stroke(255, 5, 100);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(0, lineY, 100, 500, mouseX / 2, mouseY / 2, 300, 300);
        }
        lineY += 10;
    }
};
Arm.prototype.randRight = function () {
    rand = int(random(60));
    lineY = 0;
    noFill();
    stroke(255, 5, 100);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(600, lineY, 500, 200, mouseX / 2, mouseY / 2, 300, 300);
        }
        lineY += 10;
    }
}