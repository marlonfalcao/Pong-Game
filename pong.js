//variaveis da boilinha
let xBolinha = 250;
let yBolinha = 175;
let diametroBolinha = 25;
let raio = diametroBolinha / 2;

//variaveis velocidade da bolinha
let velocxBolinha = 6;
let velocyBolinha = 6;

//variaveis da raquete jogador
let xRaqueteJog = 10
let yRaqueteJog = 130
let raqueteComprimentoJog = 10
let raqueteAlturaJog = 90

//variaves raquete oponente
let xRaquetePc = 480
let yRaquetePc = 130
let raqueteComprimentoPc = 10
let raqueteAlturaPc = 90

let colidiu = false;

function setup() {
  createCanvas(500, 350);
}

function draw() {
    background(000);
    mostraBolinha();
    movBolinha();
    verificaColisaoBorda();
    mostraRaqueteJog();
    mostraRaquetePc();
    movimentaRaqueteJog();
    verificaColisaoRaqueteJog();
    verificaColisaoRaquetePc ();
  }

function mostraRaqueteJog (){
  rect (xRaqueteJog, yRaqueteJog, raqueteComprimentoJog, raqueteAlturaJog);
}

function mostraRaquetePc (){
  rect (xRaquetePc, yRaquetePc, raqueteComprimentoPc, raqueteAlturaPc);
}

function mostraBolinha (){
    circle (xBolinha, yBolinha, diametroBolinha);
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

function movimentaRaqueteJog () {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteJog -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteJog += 10;
  }
}

function verificaColisaoRaqueteJog () {
  if (xBolinha - raio < xRaqueteJog + raqueteComprimentoJog && yBolinha - raio < yRaqueteJog + raqueteAlturaJog && yBolinha + raio > yRaqueteJog){
    velocxBolinha *= -1
  }
}

function verificaColisaoRaquetePc () {
  if (xBolinha - raio > xRaquetePc + raqueteComprimentoPc && yBolinha - raio > yRaquetePc + raqueteAlturaPc && yBolinha + raio > yRaqueteJog){
    velocxBolinha *= -1
  }
}
