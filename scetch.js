let globalScale = 0.5;

let baseSize = 960; //original background size
let CSX = baseSize * globalScale;
let CSY = baseSize * globalScale;

let drumScale = 0.5; // extra drum-only scale (still works!)
let drumsetX = 100; // offset from center (in original 960 units)
let drumsetY = 120;

let bgImg;
let kickN, kickH;
let snareN, snareH;
let hihatN, hihatH;
let tom1N, tom1H;
let tom3N, tom3H;
let crashN, crashHH;
let rideN, rideH;

function preload() {
  bgImg = loadImage("assets/IMG/scene-01.png");
  kickN = loadImage("assets/IMG/State-01/BaseDrumImage.png");
  kickH = loadImage("assets/IMG/State-02/BaseDrumImage.png");
  snareN = loadImage("assets/IMG/State-01/SnareImage.png");
  snareH = loadImage("assets/IMG/State-02/SnareImage.png");
  hihatN = loadImage("assets/IMG/State-01/hihatImage.png");
  hihatH = loadImage("assets/IMG/State-02/hihatImage.png");
  tom1N = loadImage("assets/IMG/State-01/Tom01Image.png");
  tom1H = loadImage("assets/IMG/State-02/Tom01Image.png");
  tom3N = loadImage("assets/IMG/State-01/Tom03Image.png");
  tom3H = loadImage("assets/IMG/State-02/Tom03Image.png");
  crashN = loadImage("assets/IMG/State-01/CrashImage.png");
  crashH = loadImage("assets/IMG/State-02/CrashImage.png");
  rideN = loadImage("assets/IMG/State-01/RideImage.png");
  rideH = loadImage("assets/IMG/State-02/RideImage.png");
}

function setup() {
  createCanvas(CSX, CSY);
  imageMode(CENTER);
}

function draw() {
  background(0);

  // ONE SINGLE push/pop that scales EVERYTHING perfectly
  push();
  translate(width / 2, height / 2); // go to center of current canvas
  scale(globalScale); // ← THIS SCALES ALL OBJECTS EXACTLY LIKE CANVAS

  // Background — now scales perfectly with canvas
  image(bgImg, 0, 0, baseSize, baseSize);

  // Drumset — position + extra drumScale
  push();
  translate(drumsetX, drumsetY);
  scale(drumScale);

  drawDrum(snareN, snareH, 83); // S
  drawDrum(hihatN, hihatH, 68); // D
  drawDrum(tom1N, tom1H, 70); // F
  drawDrum(tom3N, tom3H, 71); // G
  drawDrum(crashN, crashH, 72); // H
  drawDrum(rideN, rideH, 74); // J
  drawDrum(kickN, kickH, 65); // A
  pop(); // end drumset
  pop(); // end globalScale
}

function drawDrum(normal, hit, keyCode) {
  let img = keyIsDown(keyCode) ? hit : normal;
  image(img, 0, 0);
}
