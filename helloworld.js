let sprite;

function preload() {
  sprite = loadImage('img/Marx Engels Lenin.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 0, 0);

  fill(255, 255, 0);
  noStroke();

  translate(windowWidth/2, windowHeight/2);

  beginShape();
  for (i = 1; i <= 10; i++) {
    r = i % 2 == 0 ? windowWidth/4 : windowWidth/9;
    theta = -frameCount / 100;
    vertex(r * cos(theta + 2.0 * PI * i / 10), r * sin(theta + 2.0 * PI * i / 10));
  }
  endShape();

  w = sprite.width + windowWidth/5 * cos(2.0 * PI * frameCount / 100);
  h = sprite.height + windowWidth/5 * cos(2.0 * PI * frameCount / 100);
  image(sprite, -w/2, -h/2, w, h);
}
