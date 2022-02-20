//variaveis da boilinha
let xBolinha = 250;
let yBolinha = 175;
let diametroBolinha = 30;
let raio = diametroBolinha / 2;

//variaveis velocidade da bolinha
let velocxBolinha = 3
let velocyBolinha = 3

//variaveis da raquete jogador
let xRaqueteJog = 10
let yRaqueteJog = 130
let raqueteComprimento = 10
let raqueteAltura = 90

//variaves raquete oponente
let xRaquetePc = 480
let yRaquetePc = 130
let velocYpc;

let colidiu = false;

function setup() {
  createCanvas(500, 350);
}

function draw() {
    background(000);
    mostraBolinha();
    movBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaqueteJog,yRaqueteJog);
    mostraRaquete(xRaquetePc, yRaquetePc);
    movimentaRaqueteJog();
    movimentaRaquetePC();
    verificaColisaoRaqueteLib(xRaqueteJog,yRaqueteJog);
    verificaColisaoRaqueteLib(xRaquetePc,yRaquetePc);
}

function mostraRaquete (x,y){
  rect (x, y, raqueteComprimento, raqueteAltura);
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

function verificaColisaoRaqueteLib(x,y){
  colidiu =  
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocxBolinha *= -1;
  }
}
function movimentaRaquetePC (){
  velocYpc = yBolinha - yRaquetePc - raqueteComprimento / 2 - 20
  yRaquetePc += velocYpc
}