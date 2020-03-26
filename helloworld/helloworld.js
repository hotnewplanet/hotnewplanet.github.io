let sprite;
let aspect;

function preload() {
  sprite = loadImage('/img/Marx Engels Lenin.png');
  aspect = sprite.height / sprite.width;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 0, 0);

  fill(255, 255, 0);
  noStroke();

  translate(windowWidth/2, windowHeight/2);

  R = windowWidth > windowHeight ? windowWidth/3 : windowHeight/3;

  beginShape();
  for (i = 1; i <= 10; i++) {
    r = i % 2 == 0 ? R : R*0.444;
    theta = -frameCount / 100;
    vertex(r * cos(theta + 2.0 * PI * i / 10), r * sin(theta + 2.0 * PI * i / 10));
  }
  endShape();

  S = cos(2.0*PI*frameCount/100);
  W = windowWidth > windowHeight ? windowWidth/3 + windowWidth/5*S : windowHeight/3 + windowHeight/5*S;

  w = aspect * W;
  h = W;

  image(sprite, -w/2, -h/2, w, h);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}