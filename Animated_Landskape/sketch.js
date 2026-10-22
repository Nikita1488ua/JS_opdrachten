  //custom variable for x coordinate of cloud
  let cloudOneX = 50;

  //custom variable for shooting stars
  let lineXone = 0;
  let lineYone = 0;
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(30, 30, 120 + cloudOneX % 400); //navy 
  frameRate(15); //set frame rate to 15

  //shooting star
  stroke("yellow");
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);
  

  //moon
  fill(255);
  stroke(0);
  circle(350, 50, 100);

  //overlapping navy circle for crescent moon
  stroke(30, 30, 120 + cloudOneX % 400);   
  fill(30, 30, 120 + cloudOneX % 400);
  circle(320,50,100);

  //big gray mountains
  stroke(0);
  fill(80);
  triangle(-40,300,75,100, 250,300);
  triangle(100,300,300,100, 500,300);

  //grass
  fill('rgb(50,76,50)');
  rect(0,300, 400, 100);

  //cloud
  fill(255);
  ellipse(cloudOneX, 50, 80, 40);
  ellipse(cloudOneX - 40, 100, 60, 20);
  ellipse(cloudOneX + 20, 150, 40, 10);

  //growing tree
  //trunk
  fill("rgb(118,80,72)");
  rect(40, 270, 15, 50);
  //leaves
  fill("green");
  triangle(25, 270, 45, 240 - frameCount % 250, 70, 270);

  //trunk
  fill("rgb(118,80,72)");
  rect(340, 330, 15, 50);
  //leaves
  fill("green");
  triangle(325, 330, 345, 240 - frameCount % 250, 370, 330);

  //sets the x coordinate to the frame count
  //resets at left edge
  cloudOneX = frameCount % width

  //set shooting star to random location
  lineXone = random(0, width);
  lineYone = random(0, height/2);

}