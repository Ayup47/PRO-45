var neko, nekoimg1, nekoimg2;
var damb, dambimg1, dambimg2; 

var ground;
var bg,bgImg;
function preload(){
bgImg = loadImage("dark dungeon.jpg");

}



function setup() {
  createCanvas(4000,300);
  //bgs should be added 560 ahead 
  
  

  bg = createSprite(340,147,300,300);
  bg.addImage("bg",bgImg);
  bg.scale = 1.5;
  bg2 = createSprite(800,147,300,300);
  bg2.addImage("bg",bgImg);
  bg2.scale=1.5;
  bg3 = createSprite(1250,147,300,300);
  bg3.addImage("bg",bgImg);
  bg3.scale=1.5;
  bg4 = createSprite(1700,147,300,300);
  bg4.addImage("bg",bgImg);
  bg4.scale=1.5;
  bg5 = createSprite(2150,147,300,300);
  bg5.addImage("bg",bgImg);
  bg5.scale=1.5;
  bg6 = createSprite(2600,147,300,300);
  bg6.addImage("bg",bgImg);
  bg6.scale=1.5;
  bg7 = createSprite(3050,147,300,300);
  bg7.addImage("bg",bgImg);
  bg7.scale=1.5;
  bg8 = createSprite(3500,147,300,300);
  bg8.addImage("bg",bgImg);
  bg8.scale=1.5;
  bg9 = createSprite(3950,147,300,300);
  bg9.addImage("bg",bgImg);
  bg9.scale=1.5;
  
  
  ground = createSprite(2000,295,4000,10);
  
  neko = createSprite(50,262,30,30);
  

}

function draw() {
  background(0,0,0);  
  drawSprites();
  text(mouseX + ',' + mouseY,mouseX,mouseY);
  neko.collide(ground);
  
  if(keyDown("UP_ARROW")&& neko.y >= 30) {
    neko.velocityY = -12;
  
  }
  neko.velocityY = neko.velocityY+0.8
 













}