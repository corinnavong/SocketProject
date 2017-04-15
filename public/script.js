var notes = [ 220, 245, 260, 280, 300, 320, 340, 360];

var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var env, triOsc;

var c;

function setup() {
  var cnv = createCanvas(800, 400);
  background(255);

  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.start();
  triOsc.freq(notes[1]);

  cnv.mousePressed(playEnv);

}

function playEnv(){
  // trigger env on triOsc, 0 seconds from now
  // After decay, sustain for 0.2 seconds before release
  env.play(triOsc, 0, susPercent);
}

function draw() {
  fill(180, 214, 237);
  noStroke();

  c = color(50, 55, 100);
  fill(252, 171, 185);
  rect(0, 10, 60, 800);

  c = color(50, 55, 100);
  fill(234, 121, 140);
  rect(70, 10, 60, 800);

  c = color(50, 55, 100);
  fill(226, 49, 79);
  rect(140, 10, 60, 800);

  c= color(50, 55, 100);
  fill(232, 161, 120);
  rect(210, 10, 60, 800);

  c = color(50, 55, 100);
  fill(242, 232, 137);
  rect(280, 10, 60, 800);

  c = color(50, 55, 100);
  fill(135, 219, 129);
  rect(350, 10, 60, 800);

  c = color(50, 55, 100);
  fill(120, 187, 232);
  rect(420, 10, 60, 800);

  c = color(50, 55, 100);
  fill(120, 163, 232);
  rect(490, 10, 60, 800);

  c = color(50, 55, 100);
  fill(109, 127, 219);
  rect(560, 10, 60, 800);

  c = color(50, 55, 100);
  fill(87, 83, 193);
  rect(630, 10, 60, 800);

  c = color(50, 55, 100);
  fill(55, 52, 153);
  rect(700, 10, 60, 800);  
}