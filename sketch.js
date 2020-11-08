var bullet,weight,speed;
var thickness,wall;

function setup(){
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(100,200,40,40);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw(){
  background("black");
  if(hascolllided(bullet,wall)){
    bullet.velocityX=0;
    var damage=.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hascolllided(bullet,wall){
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    return true;
  }
  else{
    return false;
  }
}
  