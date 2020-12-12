let screen = 0;
let y = -20;
let x = 200;
let speed = 1;
let score = 0;
let PageNum = 1
let NumPages = 9
let eyeOpenness = 0;
let audioStarted = true;
let song;
let shark;
let img;
let rain = [];
let raindrop
let numRain = 10;
let serial;
let portName = "COM5";
let inMessage = [0, 0];
var timer = 30;
let newGame = true;
let latestData = "waiting for data";
let sliderStart = 0;
let sliderEnd = 500
let sensorValue = 25;
function setup() {
 createCanvas(windowWidth, windowHeight);

 serial = new p5.SerialPort();

 serial.list();
 serial.open('COM5');

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 latestData = currentString;
}

function draw() {
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);
 // Polling method
 /*
 if (serial.available() > 0) {
  let data = serial.read();
  ellipse(50,50,data,data);
 }
 */
}
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numRain; i++) {
    rain[i] = [];
    rain[i][0] = random(width);
    rain[i][1] = random(height);
  }
  image(sea, 0, 0);
}
function draw() {
  background(255,255,255);
  fill(0,0,0);
    if (inMessage[1] == 1){
        fill(random(255),random(255),random(255));
    }
  ellipse(width/2, height/2, map(inMessage[0], 0, 1023, 0, width), map(inMessage[0], 0, 1023, 0, height));
  if (screen == 0) {
    gameOn()
  } else if (screen == 1) {
    endScreen()
  }

}

function preload() {
  soundFormats('mp3', 'ogg');
  shark = loadImage('shark.png');
  song = loadSound('Jaws2.mp3');
  sea = loadImage('Underwater.jpg')
  raindrop = loadImage('rain.png')
}
function gameOn() {
    if (y > height) {
    screen = 0
    song.stop();
  }
   if (y > height - 50 && x > mouseX - 35 && x < mouseX + 35) {
    y = -20
    speed = 0.5
    score+= 1

  }
  if (y == -20) {
    pickRandom();
}

function pickRandom() {
  x = random(20, width - 20)
}

function endScreen() {
  background(150)
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2)
  text("SCORE = " + score, width / 2, height / 2 + 20)
  text('click to play again', width / 2, height / 2 + 40);
}
  imageMode(CENTER);
  // song.setVolume(0.1);
  image(sea, width / 2, height / 2, 600, 500)
  rectMode(CENTER)
  // rect(mouseX,height-10,50,30)
  image(shark,mouseX, height - 50, 70, 100)
  // ellipse(x,y,20,20)
  image(raindrop, x, y, 60, 50)
  text("Score = " + score , 150, 20)
  y += speed; 
}

function mousePressed() {
  if (screen == 0) {
    screen = 1
    song.loop();
    song.play();

  } else if (screen == 1) {
    screen = 0
  }
}

function draw() {
  background(200) 
  for (let i = 0; i < numRain; i++) {
    ellipse(rain[i][0], rain[i][1], 5, 5);
    if (rain[i][1] > height) {
      rain[i][0] = random(width);
      rain[i][1] = -random(height);
    }
    if (screen == 0) {
      gameOn()
    } else if (screen == 1) {
      endScreen()
    }
    
  }  
    if (timer != 0) {
    fill(0);
        text(timer + " SECONDS", 480, 20);
        text(' X ' + score, 570, 40);
    }
    if (timer == 0 && mouseIsPressed) {
        axoew = 0;
        timer = 30;
        setup();
}
  function endScreen() {
  background(150)
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2)
  text("SCORE = " + score, width / 2, height / 2 + 20)
  text('click to play again', width / 2, height / 2 + 40);
}
  function reset() {
  if (timer == 0) 
    screen = 1;
  speed = 0.2;
  y = +20;
}
  function draw() {
   background(0);
   fill(255);
   text("sensor value" + inData, 30, 30);
  }
}