let PageNum = 1;
let NumPages = 9
let CharA = 300;
let CharB = 200;
let CharA1 = 300;
let CharB1 = 200;
let eyeOpenness = 0;
let audioStarted = true;
let pupilSize = 5;
let song;
let graohic1;
let graphic2;
let shark;



function preload() {
 shark = loadImage('shark.png');
 song = loadSound('Jaws2.mp3');
}
function setup() {
  shark=loadImage('shark.png')
  graphic1=loadImage('https://github.com/Jesse9980/mmp210midterm/blob/main/Images/Adam.jpg')
  graphic2=loadImage('https://github.com/Jesse9980/mmp210midterm/blob/main/Images/birds.jpeg')
  song = loadSound('Jaws2.mp3');
  side1=true
  front1=true
  
  side2=true
  front2=true
  
 image(graohic1, 0,0)
 image(graohic2, 100,100)
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
function draw() {
  background(10, 10); // translucent background (creates trails)
}
}
function setup() {
  background(255, 0, 0);
  createCanvas(400, 400);
}
function draw() { 
if (PageNum == 1)
  background (0,255,255);
 push()
    pop();
 //Water
  let c = color(0,100,100);
fill(c);
noStroke();
rect(0,200, width,height/2);

  let c2 = color(255, 204, 0);
fill(c2);
noStroke();
ellipse(25, 25, 80, 80)

//character
  fill(240,128,128)
ellipse(CharA-10,CharB,30,30,200,200)
   
  fill(240,0,128)
rect(CharA-40,CharB-15,30,30)

  fill(220,128,128)
ellipse(CharA-40,CharB,20,15,200)

  fill(240,120,120)
ellipse(CharA-40,CharB+5,20,15,200,200)
//character2
  
  fill(240,128,100)
ellipse(CharA1-100,CharB1,30,30,200,200)
   
  fill(240,100,128)
rect(CharA1-130,CharB1-15,30,30)

  fill(220,128,128)
ellipse(CharA1-130,CharB1,20,15,200,200)
  
  fill(240,120,120)
ellipse(CharA1-130,CharB1+5,20,15,200,200)
   }
function keyPressed() {

  if (keyCode == DOWN_ARROW) {
    CharB += 10;
    side1=true;

  }

  if (keyCode == UP_ARROW) {
    CharB -= 10;
    side1=true;
  }

  if (keyCode == LEFT_ARROW) {
    CharA -= 10;
    side1=false;
    front1=true;

  }

  if (keyCode == RIGHT_ARROW) {
    CharA += 10;
    side1=false;
    front1=true;

  }
  
  //character2
  //D
  if (keyCode == 83) {
    CharB1 += 10;
    side2=true;
    front2=false

  }
//A
  if (keyCode == 87) {
    CharB1 -= 10;
    side2=true;
    front2=false
  }
//w
  if (keyCode == 65) {
    CharA1 -= 10;
    side2=false;
    front2=true;

  }
//s
  if (keyCode == 68) {
    CharA1 += 10;
    side2=false;
    front2=true;

  }
function draw() {
//the cursor is supposed to turn into a shark
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  if (mouseX < 50 && mouseY < 50) {
    cursor(CROSS);
  } else if (mouseX > 50 && mouseY < 50) {
    cursor('progress');
  } else if (mouseX > 50 && mouseY > 50) {
    cursor('shark.png');
  } else {
    cursor('grab');
  }
}
}