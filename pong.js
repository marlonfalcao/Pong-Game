//variaveis da boilinha
let xBolinha = 250;
let yBolinha = 175;
let diametroBolinha = 30;
let raio = diametroBolinha / 2;

//variaveis velocidade da bolinha
let velocxBolinha = 6
let velocyBolinha = 6

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
let chanceDeErrar = 0

//placar do jogo

let meusPontos = 0
let pontosPc = 0

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}

function setup() {
  createCanvas(500, 350);
  trilha.loop();
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
    incluirPlacar();
    verificaColisaoRaqueteLib(xRaqueteJog,yRaqueteJog);
    verificaColisaoRaqueteLib(xRaquetePc,yRaquetePc);
    marcaPonto();
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
    raquetada.play();
  }
}
function movimentaRaquetePC (){
  velocYpc = yBolinha - yRaquetePc - raqueteComprimento / 2 - 20;
  yRaquetePc += velocYpc + chanceDeErrar
  calculaChanceDeErrar()
}
function calculaChanceDeErrar(){
  if (pontosPc >= meusPontos){
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
    else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
    }
  }
}

function incluirPlacar(){
  stroke(255);
  textAlign (CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(100, 10, 40, 20);
  fill(255);
  text(meusPontos, 120, 26);
  fill(color(255,140,0));
  rect(360, 10, 40, 20);
  fill(255);
  text(pontosPc, 380, 26);
}

function marcaPonto(){
  if (xBolinha > 490){
    meusPontos +=1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosPc += 1;
    ponto.play();
  }
}
