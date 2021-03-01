let x = 0;
let y = 0;
let spacing = 20;

function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  strokeWeight(2);
  //Increased the strokeWeight
  stroke(10, 110, 50);
  if (random(1) < 0.50) {
    stroke (random(x+y),y,x%40)
    //change lines into different colors
    rect(x + spacing, y, x + spacing , y + spacing );
  } else {
    stroke(random(y+x),x,y%60)
    //change lines into different colors
    rect(x, y + spacing, x + spacing , y);
    //changed line to rectangle
    
  }
  x += spacing;

  if (x > width) {
    y += spacing;
    x = 0
  }
}
