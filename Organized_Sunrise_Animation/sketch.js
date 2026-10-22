let sunHeight = 600;
let greenVal = 0;
let redVal = 0;

function setup() {
    createCanvas(600, 400);
}

// function to draw the sky
function sky() {
     background(redVal, greenVal, 0);
}

// function to draw the sun
function sun() {
    fill(255, 135, 5, 60);
    strokeWeight(0);
    circle(200, sunHeight, 180);
    fill(255, 100, 0, 100);
    circle(200, sunHeight, 140);
}

// function to draw the mountains
function mountains() {
    fill(110, 50, 18);
    triangle(200, 400, 520, 200, 800, 400);
    fill(110,95,20);
    triangle(200,400,520,200,350,400);  

    fill(150, 75, 0);
    triangle(-100, 400, 150, 100, 500, 400);
    fill(100, 50, 12);
    triangle(-100, 400, 150, 100, 0, 400); 

    fill(150, 100, 0);
    triangle(200, 400, 450, 270, 800, 400);
    fill(120, 80, 50);
    triangle(200, 400, 450, 270, 300, 400);
}

// function to draw trees
function tree(x, y, size) {
    fill (0, 70, 0);
    rect(x-size, y, size*2, size*6);
    fill (0, 140, 0);
    triangle(x-size*3, y, x, y-size*8, x+size*3, y);
}

// function to calculate the y position of the tree based on the x position
function treeLine(x) {
    let y = -0.6 * x + 400;
    return y;
}

// function to draw multiple trees
function trees() {
    // First tree
    let x = 130;
    let y = treeLine(x);
    tree(x, y, 7);

    // Second tree
    x = 200;
    y = treeLine(x);
    tree(x, y, 10);

    // Third tree
    x = 260;
    y = treeLine(x);
    tree(x, y, 6);
}

function draw() {
    // call sky function
    sky();

    // call sun function
    sun();

    // call mountains function
    mountains();

    // call trees() function
    trees();

    // reduce sunHeight by 2 until it reaches 130
    if (sunHeight > 130) {
        sunHeight -= 2;
    }

    if (sunHeight < 480){
        greenVal += 1;
        redVal += 4;

            if (mouseIsPressed && sunHeight === 130) {
                background(0);
    } 
    }
}
function keyPressed() {
  redVal=0;
  greenVal = 0;
  sunHeight = 600;
}