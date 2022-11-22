const urlString = window.location.href; 
let url = new URL(urlString); // collegamento pagine

let stelle = [];
let raggio; // dimensione delle stelle
n = 900; // numero di stelle


let slider; // slider per cambiare dimensione stelle
let myFont;

var pianeta = ["🌍", "🌕", "🪐", "⭐️", "✨", "🌏", "💥", "🌙"] // compaiono pianeti ad ogni shake


function setup(){
	createCanvas(windowWidth, windowHeight);
	
	angleMode(DEGREES); // per cerchio

	creaSt();  // richiamo funzione
	disegnaSt();  // richiamo funzione

	colore1 = color (random (0, 150), random(0, 150), random (0, 150), 10); // colori random per sfondo e stelle
	colore2 = color (random (120, 255), random(120, 255), random (120, 255));

  // definisco caratteristiche slider
  slider = createSlider(1, 20, 8, 1);
  slider.position(width/2 - 40, 10);
  slider.style('width', '80px');

}
  
  function draw() {
  
	//testo 
	push()
	fill("black");
	noStroke();
	textSize(20);
	textFont('Bungee')
	textAlign(CENTER);
	text("Scuoti per vedere la galassia", width/2, height/2);
	pop()
  
	push()
	fill("black");
	noStroke();
	textSize (15);
	textFont ('Inconsolata');
	textAlign (CENTER);
	text ("Cambia la grandezza delle stelle con il cursore", width/2, height/1.05)
  

   // STELLE, inspo Looking Up by Sophia Wood on openprocessing
	  push ()
	  t = frameCount; // rotazione
	  background (colore1); 
	  fill (colore2); // stelle bianche-colorate
	  translate (width / 2 + rotationX * 2, height / 2 + rotationX * 2);  // punto origine al centro
	  rotate (t / 3); // velocità
	  disegnaSt();
  
  // SLIDER
	let valore = slider.value();
	raggio = valore;
	pop()
  
  }
  
  
  function creaSt() { // crea stelle random nello schermo
	  for (let i = 0; i < n; i++) {
		  stelle[i] = createVector (random (-width, width), random (-height, height));  //vettore per scie
		  // ricrea le stelle di draw ogni volta che scuoti il telefono
	  }
  }
  
  
  function disegnaSt(){
	  for (let i = 0; i < n; i++) {
		  stroke("white");
		  strokeWeight(0.5);
		  circle (stelle[i].x, stelle[i].y, raggio); // disegna cerchi per le stelle
	  }
  }
  
  
  function deviceShaken() { 
	  creaSt(); // resetta stelle quando scuoti telefono
  
	  colore1 = color (random(0,150), random(0,150), random(0,150), 10); //cambio colore allo shake
	  colore2 = color (random(0,255), random(0,255), random(0,255));
  
   
	textSize(80);
	text(random(pianeta), random (0, windowWidth), random(0, windowHeight)); // creare i pianeti della galassia quando scuoto device
	
  }
  
  	// richiedo permessi iOs
	  function touchEnded(event) {
		if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
			DeviceOrientationEvent.requestPermission()
		}
	}