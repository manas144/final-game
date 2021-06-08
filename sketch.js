var fixedRect, movingRect;
var spaceship,spacegame2,spacegame3,spacegame4
var bullet
var aliengroup
var bulletgroup
var count = 0;


function preload(){
  backgroundimg = loadImage ("spacegame1.png")
  spaceshipimg = loadImage ("spacegame2.png")
  bulletimg = loadImage ("spacegame3.png")
  alienspaceshipimg =loadImage ("spacegame4.png")
}

function setup() {
  createCanvas(800,400);

  spaceship = createSprite(400,330,10,10)
  spaceship.addImage(spaceshipimg);
  spaceship.scale = 0.2
  spacegame3 = createSprite(100,30,10,10)
  aliengroup = new Group()
  bulletgroup = new Group ()

}

function draw() {
  background(backgroundimg);  
  edges=createEdgeSprites();
  spaceship.collide(edges[1]);
  spaceship.collide(edges[0]);
  if(keyDown("left_arrow")){
  spaceship.x=spaceship.x-4;
    }


    if(keyDown("right_arrow")){
    spaceship.x=spaceship.x+4;
      }
  if (keyDown ("space")) {
    createbullets()

  }
  if (bulletgroup.isTouching (aliengroup)){
aliengroup.destroyEach();
count=count+100
  } 

 createalienspaceship(); 
  drawSprites();

  text("Score: "+ count,30, 40);
 
}

function createbullets() {
  if (frameCount % 15 === 0) {
    bullet = createSprite(10,20,10,10)
    bullet.x=spaceship.x
    bullet.y=spaceship.y
    bullet.addImage(bulletimg);
    bullet.scale = 0.1111
    bullet.velocityY = -4
    bulletgroup.add(bullet);
    }
  }


function createalienspaceship(){
  

  if (frameCount % 80 === 0) {
    var x = random(10,790)
    alien=createSprite(x,0,10,10)
    alien.velocityY=1.5
    alien.addImage(alienspaceshipimg)
    alien.scale = 0.111
    aliengroup.add(alien);
  }

}
//https://github.com/manas144/clas-number-19