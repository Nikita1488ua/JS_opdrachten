function setup() {
  //creates a canvas 600 pixels wide and 400 pixels high
  createCanvas(600, 400);
}

function draw() {
  //changes tha background color
  background(135, 206, 235);

  fill("yellow");

  stroke("#FF8C00");

  strokeWeight(20);
    //draw a circle
  circle(500, 50, 100);

  stroke("green");

  fill("green");
  //draw a rectangle
  rect(0, 200, 600, 200);

  fill("red");

  stroke("white");

  strokeWeight(3);

  rect(100, 150, 100, 70);

  fill("grey");
  //maak een driehoek
  triangle(100, 150, 200, 150, 150, 100);

  textSize(40);
  //maak een emojie
  text("🐯", 150, 270)

  text("🌸", 100, 250);

  text("🐞", mouseX, mouseY);
}