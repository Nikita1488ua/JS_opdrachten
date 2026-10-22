let YP = 190;
let ySpeed = 1;
let yA = 0.3;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    ySpeed = ySpeed + yA;
    YP = YP + ySpeed;
    circle(200, YP, 50);
    if (keyIsDown("ArrowUp")){
        console.log("Key pressed");
        ySpeed = -5;
    }
}