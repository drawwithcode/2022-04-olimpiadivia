const urlString = window.location.href;
let url = new URL(urlString); //collegamento pagine

let color = "black";

var coloritesto = ["tomato", "white", "yellow", "pink", "lightblue", "green"]; //random array del testo 

//definisco variabili per video
let video;
let poseNet;
let poses = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
  frameRate (15); 

 // video
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);

  poseNet = ml5.poseNet(video);
  poseNet.on('pose', function(results) {
    poses = results;
  });

  video.hide();
}


function draw() {
  background (color);

  //testo 
  push();
	fill(random(coloritesto));
	textSize(width/10);
	textFont('Bungee')
	textAlign(CENTER);
	text("Tocca ed entra", width/2, height/2);
	pop();

  //collego il punto del naso ad un'icona
  if(poses.length>0) {
    let pose = poses [0];
    //creo variabile per il naso 
    let nose = pose.pose.nose //x, y e confidence del naso
    console.log (nose.x);
    
    //disegno sul naso
    push()
    textSize(100);
    text ("🌏", nose.x, nose.y)
    pop()
  
}
}

  function mousePressed() {
	window.open(`${url}page.html?count=${color}`, "_self"); //apro altra pagina con click
 }

	// richiedo permessi iOs
  function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}