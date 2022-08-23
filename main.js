//variáveis globais;
var trex,bordas;
var trex_img;
var chao;
var chaoimg

function preload(){
trex_img = loadAnimation("trex1.png","trex3.png","trex4.png");

chaoimg = loadImage("ground2.png");
}





//criando objetos e sua propiedades
function setup(){
 createCanvas(600,200);
 chao = createSprite(300,190,600,10)
 chao.addImage(chaoimg);

trex = createSprite(50,153,20,20);
 trex.addAnimation("correndo",trex_img);
bordas=createEdgeSprites();
}


function draw(){
  background("white");

  //mover chao
chao.velocityX = -4;

if(chao.x < 0 ){
chao.x = chao.width/2;

}


if(keyDown("space")){
trex.velocityY = -5;
} 
if(keyDown("up")){
    trex.y = trex.y - 5;
}
if(keyDown("left")){
    trex.x = trex.x - 5;
}
if(keyDown("right")){
    trex.x = trex.x + 5;
}
if(keyDown("Down")){
    trex.y = trex.y +5;
}
//    trex.bounceOff(bordas);

    drawSprites();


}