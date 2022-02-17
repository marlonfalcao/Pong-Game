let xBolinha = 250;
let yBolinha = 175;
let diametroBolinha = 25;
let raio = diametroBolinha / 2;

let velocxBolinha = 6;
let velocyBolinha = 6;

function setup() {
  createCanvas(500, 350);
}

function draw() {
  background(000);
  mostraBolinha();
  movBolinha();
  verificaColisaoBorda();
}

function mostraBolinha (){
  circle (xBolinha, yBolinha, diametroBolinha);
}

function movBolinha (){
  xBolinha += velocxBolinha
  yBolinha += velocyBolinha
}
function verificaColisaoBorda (){
    if (xBolinha + raio > width ||
    xBolinha - raio < 0) {
    velocxBolinha *= -1;
  }
  
  if (yBolinha + raio > height ||
    yBolinha - raio < 0){
    velocyBolinha *= -1;
  }
}