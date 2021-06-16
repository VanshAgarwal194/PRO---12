
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  RunnerImg= loadAnimation("Runner-1.png","Runner-1.png",
                            "Runner-2.png","Runner-1.png");

                            


}

var path
var runner;

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;


Runner=createSprite(216,348);
Runner.addAnimation("runner", RunnerImg);
Runner.scale=0.05;


invisiblePath1 = createSprite(10, 260, 28, 520);
invisiblePath1.visible = false;
invisiblePath2 = createSprite(366, 260, 45, 520);
invisiblePath2.visible = false;



}




function draw() {
  background("white");

  Runner.x = mouseX
  Runner.Y = mouseY

  
 
  
  if(path.y > 400) {
    path.y = height/2;
  }

drawSprites() ;



}
