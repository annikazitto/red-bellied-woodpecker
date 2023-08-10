let sound, amplitude;

function preload() {
  sound = loadSound("RedBelliedWoodpeckerIsolated.wav");
}

function setup() {
  
  let cnv = createCanvas(600,600);
  cnv.mouseClicked(togglePlay);

  amplitude = new p5.Amplitude();

}

function draw() {
  
  background('rgb(247,244,243)');
 
  noStroke();
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 600)
 
  fill('#E52C06');
  ellipse(width/2, height/2, size*40, size*40);
  
  
  noFill();
  strokeWeight(2);
  stroke('black') ;
  ellipse(width/2, height/2, size*100, size*100);
   // ellipse(width/2, height/2, size*155, size*155);
   // ellipse(width/2, height/2, size*200, size*200);
  ellipse(width/2, height/2, size*255, size*255);

  

    
      
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}