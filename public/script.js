var notes = [ 220, 245, 260, 280, 300, 320, 340, 360];

var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var env, triOsc;

function setup() {
  var cnv = createCanvas(800, 400);
  background(100);

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
  fill(0);
}