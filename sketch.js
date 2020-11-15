
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;

var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
  createCanvas(400,400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = survivalTime + Math.round(getFrameRate()/60)
  text("Survival Time: "+ survivalTime, 100, 50);
  
  if(ground.x<0){
     ground.x=ground.width/2;
     }
  
  if(keyDown("space") && monkey.y >= 220){
     monkey.velocityY = -12;
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  food();
  obstacles();

  drawSprites();
}

function food(){
  if(World.frameCount%80===0){
    banana = createSprite(400,200,20,20);
    banana.addImage("banana", bananaImage);
    banana.y =Math.round(random(120,200));
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.setLifetime= 10           ;
    monkey.depth = banana.depth + 1;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(World.frameCount%300===0){
    obstacle = createSprite(400, 307, 900, 10);
    obstacle.addAnimation("obstacle", obstaceImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-4;
    monkey.depth = obstacle.depth + 1;
    obstacle.setLifetime= 50;
    obstacleGroup.add(obstacle);
  }
}