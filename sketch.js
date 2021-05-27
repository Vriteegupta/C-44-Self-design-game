var fish,fishImg;
var can,canImg;
var seed,seedImg;
var sewage,sewageImg;
var bg,bgImg;

function preload(){
  bgImg=loadImage("images/bg1.jpg")
}
function setup(){
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(displayWidth/2,displayHeight/2);
  bg.addImage("bg",bgImg)
 bg.velocityX=-2;
  
}
function draw(){
  background(bgImg);
  


  drawSprites();
}
