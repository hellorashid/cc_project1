function setup() {
    createCanvas(600, 600);
    background(220);
}
var lineX = 0;
var lineY = 0;
var num = 0;
var rand;

function draw() {
    //    background(220);
    lineX = 0;
    noFill();
    //    
    //    rand = int(random(1, 60)); 
    //    lineX = 0;
    //    noFill();
    //    stroke(255, 5, 100);
    //
    //    for (var i = 0; i < 60; i++) {
    //        if (i === rand) { 
    //            bezier(lineX, 0, 10, 10, 90, 90, mouseX, mouseY);
    //        } 
    //        lineX += 10;
    //    }
    //    
    armRandTop();
    armRandBottom();
    armRandLeft();
    armRandRight();
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
    fill(220);
    ellipse(width / 2, height / 2, 200, 200);
}

function drawArms() {
    lineY = 0;
    for (var i = 0; i < 60; i++) {
        stroke(255, 5, 100);
        bezier(600, lineY, 100, 500, mouseX / 2, mouseY / 2, mouseX, mouseY);
        lineY += 10;
    }
}




function armRandTop() {
    rand = int(random(60));
    lineX = 0;
    noFill();
    stroke(255, 5, 100);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(lineX, 0, 10, 10, 90, 90, mouseX, mouseY);
        }
        lineX += 10;
    }
}

function armRandBottom() {
    rand = int(random(60));
    lineX = 0;
    noFill();
    stroke(255, 5, 100);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(lineX, 600, 500, 500, mouseX / 2, mouseY / 2, mouseX, mouseY);
        }
        lineX += 10;
    }
}

function armRandLeft() {
    rand = int(random(60));
    lineY = 0;
    noFill();
    stroke(255, 5, 100);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(0, lineY, 100, 500, mouseX / 2, mouseY / 2, mouseX, mouseY);
        }
        lineY += 10;
    }
}

function armRandRight() {
    rand = int(random(60));
    lineY = 0;
    noFill();
    stroke(255, 5, 100);
    for (var i = 0; i < 60; i++) {
        if (i === rand) {
            bezier(600, lineY, 100, 500, mouseX / 2, mouseY / 2, mouseX, mouseY);
        }
        lineY += 10;
    }
}