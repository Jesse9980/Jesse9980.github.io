

function setup() {
  createCanvas(400, 400);
}
  

function draw() {
  background(220);
  
      
  //body
  fill(92, 0, 54);
  ellipse(210, 550, 600, 600);

  // Head
  fill(32, 0, 0);
  ellipse(200, 150, 250, 250);

  
  // Smile
  fill(235);
 arc(200, 180, 150, 50, 0, radians(180), PIE);
      

  // Eyes
  noStroke();
  fill(0);
  ellipse(170, 100, 20, 20);
  ellipse(230, 100, 20, 20);
  
  
    }
    
  
 