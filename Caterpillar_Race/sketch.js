//General variables
let startLine = 30;
let finishLine = 400;
let circX = startLine;
let circY = 250;
let spacing = 20;
let segmentSize = 50;
let eyeSize = 15;
let numCaterpillars = 4;
let caterpillarEnds = [];
let isRacing = false;

function setup() {
    createCanvas(500, 500);
    frameRate(3);

    //initialize the caterpillarEnds array with the starting position of each caterpillar
    for (let i=0; i < numCaterpillars; i++) {
        //add the position of last segment into an array
        caterpillarEnds.push(startLine);
    }
}

function draw() {
    background(95, 23, 23);

    // Draw the start and finish lines.
    noStroke();
    fill("yellow");
    rect(startLine, 0, 5, height);
    fill("green");
    rect(finishLine, 0, 5, height);

    // If the race has started, move the caterpillars. Otherwise, display a message to click to start.
    if (isRacing === true) {
        moveCaterpillars();
    }
    else{
        writeStart();
    }

    // Draw the caterpillars.
    drawCaterpillars();

    // Check if any caterpillar has reached the finish line.
    checkWinner();
}

// Check if any caterpillar has reached the finish line and display a message if so.
function checkWinner() {
    for (let i = 0; i < caterpillarEnds.length; i++) {
        if (caterpillarEnds[i] >= finishLine) {
            // Style the text.
            textSize(24);
            textAlign(CENTER);
            fill(0, 255, 0);
            noStroke();
            text(`Caterpillar ${i + 1} wins!`, width / 2, height / 2);

            // Stop the draw loop to freeze the race.
            noLoop();
        }
    }
}

// Display a message to click to start the race.
function writeStart() {
    // Style the text.
    textSize(24);
    textAlign(CENTER);
    fill(255);
    noStroke();

    // Display the message.
    text("🏁 Click to start!", width / 2, height / 2);
}

// Draw a caterpillar at the specified position with the specified number of segments.
function drawCaterpillar(x, y, segments) {

    for (let i = 0; i < segments; i++) {

        // Draw the body segments of the caterpillar.
        fill("blue");
        stroke("black");
        strokeWeight(2);
        circle(x - 25 - spacing * i , y + 14, segmentSize * 0.4);

        fill("blue");
        stroke("black");
        strokeWeight(2);
        circle(x, y, segmentSize);
        x += spacing;

        // Draw the eyes on the first segment.
        fill("black");
        stroke("White");
        strokeWeight(4);
        circle(x, y - 10, eyeSize);
        circle(x - eyeSize, y - 10, eyeSize);   
    }

  
}

// Draw all the caterpillars on the canvas.
function drawCaterpillars(){
    for (let i = 0; i < numCaterpillars; i++) {
        let padding = height / numCaterpillars;
        let y = (i + 0.5) * padding;
        let crawl = round(random(3, 7));
        drawCaterpillar(caterpillarEnds[i], y, crawl);
    }
}

// Move each caterpillar forward by a random amount.
 function moveCaterpillars() {
    for (let i = 0; i < numCaterpillars; i++) {
        let move = random(5,30);
        caterpillarEnds[i] += move;
    }
 }

 // Start the race when the mouse is pressed.
 function mousePressed() {
    isRacing = true;
 }