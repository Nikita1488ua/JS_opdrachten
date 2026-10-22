//custom variables for y-coordinate of sun & horizon
let SunHeight;
let horizon = 400;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(30, 30, 120);

    //chaange horizon color based on sun position
    if (SunHeight < horizon) {
        background(30, 30, 260);
    } else {
        background(30, 30, 120);
    }

    //sun
    fill(255, 255, 10);
    rect(400, SunHeight, 100, 100);
    
    //change ground color based on sun position
    if(SunHeight < horizon) {
        fill(0, 100, 0);
    } else{
        fill(0, 60, 0);
    }
     rect(0, 400, 800, 200);

    //horizon
    stroke(0, 100, 0);
    line(0, horizon, 800, horizon);

    //sun follows y-coordinate of mouse
    SunHeight = mouseY;
    
    //log sun position relative to horizon
    console.log(SunHeight < horizon);3
}
