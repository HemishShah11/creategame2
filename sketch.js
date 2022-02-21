var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg;
var gameState;
var zombieGroup;
var bulletGroup;
var bulletImg;
var backboard;
var life=2;
var score=0;
var gameState=0;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
zombieImg = loadImage("assets/zombie.png")

bulletImg = loadImage("assets/bullet1.png")
}

function setup() {

  zombieGroup=createGroup();
  bulletGroup=createGroup();
  createCanvas(windowWidth,windowHeight);

heading=createElement("h1");
scoreboard=createElement("h1")

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3;


   bullet= createSprite(100, height/2, 50,50);
   bullet.addImage(bulletImg);
   bullet.scale=0.05;

   //player.debug = true
    player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0);

  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  
  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)
  

  fill("white");
  stroke("white")
  text("click p to start", 400,400);


  if(keyDown("p")){
    gameState=1
  }  

  if (gameState === 1) {
    player.y=mouseY;
    if(keyDown("UP_ARROW")){
      player.y = player.y-30
    }
    if(keyDown("DOWN_ARROW")){
     player.y = player.y+30
    }
    
    
    //release bullets and change the image of shooter to shooting position when space is pressed
    if(keyWentDown("space")){
     
      player.addImage(shooter_shooting)
     
    }
    
    //player goes back to original standing image once we stop pressing the space bar
    else if(keyDown("space")){
      //player.addImage( shooter_shooting )
     // player.addImage()
      player.addImage(shooterImg)
      shootBullet();
      console.log("shoot");
     //player.addImage(shooter_1.png)
    
    
  }
}
  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
      
  zombieGroup.setLifetimeEach(-1);


  //moving the player up and down and making the game mobile compatible using touches
console.log(gameState)

spawnZombie();
    

drawSprites();
}

function zombieGroup(){
  zombie = createSprite(800,random(20,780),40,40);
  zombie.addImage(zombieImg);
  zombie.velocityX = -8;
  zombie.lifetime = 400;
 zombieGroup.add(bluebubble);
    if (frameCount % 80 === 0) {
      drawZombie();
    }
  }

  function shootBullet(){
    bullet= createSprite(player.x, width/2, 50,20);
    bullet.y= player.y-20;
    bullet.addImage(bulletImg);
    bullet.scale=0.1;
    bullet.velocityX= 7;
    bulletGroup.add(bullet);
  }

  function spawnZombie() {
    if (frameCount % 60 === 0) {
      var zombie = createSprite(width+100,height);
      zombie.y = Math.round(random(20,600));
      zombie.addImage(zombieImg);
      zombie.scale = 0.15;
      zombie.velocityX = -3;
  
      zombie.lifetime = 200;
      zombieGroup.add(zombie);
    }
  }