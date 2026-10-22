let sunHeight = 600;
let greenVal = 0;
let redVal = 0;


function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(redVal, greenVal, 0);
    //sun
    fill(255, 135, 5, 60);
    strokeWeight(0);
    circle(200, sunHeight, 180);
    fill(255, 100, 0, 100);
    circle(200, sunHeight, 140);

    //mountains
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
