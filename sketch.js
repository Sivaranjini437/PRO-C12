var pathImg, boyImg, powerImg, bombImg, coinImg, energyDrinkImg, path, boy, edges;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  powerImg = loadImage("power.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
}

function draw() {
  background(0);
  boy.x = World.mouseX;
   
  console.log(boy.y);

  edges= createEdgeSprites();
  boy.collide(edges);
  
//code to reset the background
 if(path.y > 400 ){
    path.y = height/2;
  }
  drawSprites();
}
