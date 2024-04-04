let lucifer;

function preload(){
  lucifer = loadImage('images/LuciferEye.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  frameRate(100);
}

function draw() {
  let x = random(lucifer.width);
  let y = random(lucifer.height);
  let c = lucifer.get(int(x), int(y));
  fill(c);
  noStroke();
  rect(x, y, 20, 20);
}
