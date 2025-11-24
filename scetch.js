let CSSq = 960;
let CSX = CSSq;
let CSY = CSSq;

let globalScale = 1;
let drumScale   = 0.5;

// ←←← ONLY THESE TWO CONTROL DRUMSET POSITION →→→
let drumsetX = 100;     // positive = move right
let drumsetY = 120;     // positive = move down
// Example: let drumsetX = 120;  let drumsetY = -80;

let bgImg;

let kickN,  kickH;
let snareN, snareH;
let hihatN, hihatH;
let tom1N,  tom1H;
let tom3N,  tom3H;
let crashN, crashH;
let rideN,  rideH;

function preload() {
  bgImg = loadImage('assets/IMG/scene-01.png');

  kickN  = loadImage('assets/IMG/State-01/BaseDrumImage.png');
  kickH  = loadImage('assets/IMG/State-02/BaseDrumImage.png');
  snareN = loadImage('assets/IMG/State-01/SnareImage.png');
  snareH = loadImage('assets/IMG/State-02/SnareImage.png');
  hihatN = loadImage('assets/IMG/State-01/hihatImage.png');
  hihatH = loadImage('assets/IMG/State-02/hihatImage.png');
  tom1N  = loadImage('assets/IMG/State-01/Tom01Image.png');
  tom1H  = loadImage('assets/IMG/State-02/Tom01Image.png');
  tom3N  = loadImage('assets/IMG/State-01/Tom03Image.png');
  tom3H  = loadImage('assets/IMG/State-02/Tom03Image.png');
  crashN = loadImage('assets/IMG/State-01/CrashImage.png');
  crashH = loadImage('assets/IMG/State-02/CrashImage.png');
  rideN  = loadImage('assets/IMG/State-01/RideImage.png');
  rideH  = loadImage('assets/IMG/State-02/RideImage.png');
}

function setup() {
  createCanvas(CSX, CSY);
  imageMode(CENTER);
}

function draw() {
  background(0);

  // 1. Background – always perfectly centered and never moves
  push();
  translate(CSX/2, CSY/2);
  scale(globalScale);
  image(bgImg, 0, 0, 960, 960);
  pop();

  // 2. Drums – move independently with drumsetX/Y
  push();
  translate(CSX/2 + drumsetX, CSY/2 + drumsetY);   // ← only this line moves the drums
  scale(globalScale);
  scale(drumScale);

  
  drawDrum(snareN, snareH, 83);   // S
  drawDrum(hihatN, hihatH, 68);   // D
  drawDrum(tom1N,  tom1H,  70);   // F
  drawDrum(tom3N,  tom3H,  71);   // G
  drawDrum(crashN, crashH, 72);   // H
  drawDrum(rideN,  rideH,  74);   // J
  drawDrum(kickN,  kickH,  65);   // A

  pop();
}

function drawDrum(normal, hit, keyCode) {
  let img = keyIsDown(keyCode) ? hit : normal;
  image(img, 0, 0);
}