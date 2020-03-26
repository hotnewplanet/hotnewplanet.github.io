let song;
let video;

function preload() {
  song = loadSound('/snd/Kraftwerk.mp3');
  video = createVideo(['/vid/Dekki.mp4']);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video.size(windowWidth, windowHeight);
}

function draw() {
  background(0,0,0);
  image(video, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    video.pause();
    song.pause();
  } else {
    video.loop();
    song.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  video.size(windowWidth, windowHeight);
}