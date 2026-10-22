let flowers = [];

// Function to create 20 flowers.
function flowerPower() {
    for (let i = 0; i < 15; i++) {
        let flower = createFlower();
        flowers.push(flower);
    }
}

// Function that creates a random flower object.
function createFlower() {
 let flower = {
   x: random(20, 700),
   y: random(20, 500),
   size: random(20, 75),
   lifespan: random(255, 300),
   color: color(random(255), random(255), random(255)),
 };
  // Return the flower object.
  return flower;
}

function drawFlower(flower) {
    noStroke();
    fill(0, 230, 0);
    strokeWeight(2);
    rect(flower.x-flower.size/20, flower.y, flower.size/10, height-flower.y);
    
    noStroke();
    fill(flower.color);

    //draw details
    ellipse(flower.x, flower.y, flower.size / 2, flower.size);
    ellipse(flower.x, flower.y, flower.size, flower.size / 2);

    //draw a yellow center
    fill("yellow");
    circle(flower.x, flower.y, flower.size / 2);
}

function updateFlowers() {
    for (let flower of flowers) {
        drawFlower(flower);
        // Wilting effect for the flower.
        flower.size *= 0.99;
        // Reduce lifespan.
        flower.lifespan -= 1; 
        if (flower.lifespan <= 0) {
            // Save index of the flower
            let i = flowers.indexOf(flower);

            // Remove wilted flower 
            flowers.splice(i, 1); 
        }
    }
}

function mousePressed() {
    let flower1 = createFlower();
    // reassign x to be mouseX
    flower1.x = mouseX;
    // reassign y to be mouseY
    flower1.y = mouseY;
        
    let flower2 = createFlower();
    flower2.x = mouseX - 40;
    flower2.y = mouseY + 20;

    let flower3 = createFlower();
    flower3.x = mouseX + 60;
    flower3.y = mouseY + 40;

    // add the flower to the flowers array
    flowers.push(flower1, flower2, flower3);
}

function setup() {
    createCanvas(800, 600);
    flowerPower();
}

function draw() {
    background("lightblue");
    updateFlowers();
}
