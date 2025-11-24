let globalScale = 0.5;
let baseSize = 960;
let CSX = baseSize * globalScale;
let CSY = baseSize * globalScale;
let drumScale = 0.5;
let drumsetX = 100;
let drumsetY = 120;

let bgImg;
let kickN, kickH;
let snareN, snareH;
let hihatN, hihatH;
let tom1N, tom1H;
let tom3N, tom3H;
let crashN, crashH;
let rideN, rideH;

//SOUNDS
let kickS, snareS, hihatS, tom1S, tom3S, crashS, rideS;

function preload() {
  // Images (unchanged)
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

  // SAMPLES
  kickS = loadSound("assets/Audio/SmplPack-01/BaseDrum.opus");
  snareS = loadSound("assets/Audio/SmplPack-01/SnareOn.opus"); // or SnareOnBuzz if you prefer
  hihatS = loadSound("assets/Audio/SmplPack-01/HiHatClosed.opus");
  tom1S = loadSound("assets/Audio/SmplPack-01/Tom01.opus");
  tom3S = loadSound("assets/Audio/SmplPack-01/Tom03.opus");
  crashS = loadSound("assets/Audio/SmplPack-01/Crash.opus");
  rideS = loadSound("assets/Audio/SmplPack-01/Ride.opus");
}

function setup() {
  createCanvas(CSX, CSY);
  imageMode(CENTER);
}

function draw() {
  background(0);
  push();
  translate(width / 2, height / 2);
  scale(globalScale);

  image(bgImg, 0, 0, baseSize, baseSize);

  push();
  translate(drumsetX, drumsetY);
  scale(drumScale);

  drawDrumWithSound(snareN, snareH, snareS, 83); // S → Snare
  drawDrumWithSound(hihatN, hihatH, hihatS, 68); // D → Hi-hat closed
  drawDrumWithSound(tom1N, tom1H, tom1S, 70); // F → Tom 1
  drawDrumWithSound(tom3N, tom3H, tom3S, 71); // G → Tom 3
  drawDrumWithSound(crashN, crashH, crashS, 72); // H → Crash
  drawDrumWithSound(rideN, rideH, rideS, 74); // J → Ride
  drawDrumWithSound(kickN, kickH, kickS, 65); // A → Kick
  pop();
  pop();
}

// Prevents sound spam when key is held
let triggered = {};

function drawDrumWithSound(normal, hit, sound, keyCode) {
  let img = keyIsDown(keyCode) ? hit : normal;
  image(img, 0, 0);

  if (keyIsDown(keyCode) && !triggered[keyCode]) {
    sound.play();
    triggered[keyCode] = true;
  }
  if (!keyIsDown(keyCode)) {
    triggered[keyCode] = false;
  }
}
