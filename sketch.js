var car, wall;
var weight, speed;
var deformation;
function setup() {
  createCanvas(1360,400);
  
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  
  wall = createSprite(1260, 200, 60, 200);
  wall.shapeColor = rgb(80, 80, 80);

  weight = random(400, 1500);
  speed = random(55, 90);
}

function draw() {
  background("black");  
  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22500;
  }
  if(deformation < 100){
    car.shapeColor = "green";
  }
  if(deformation > 100 && deformation < 180){
    car.shapeColor = "yellow";
  }
  if(deformation > 180){
    car.shapeColor = "red";
  }
  drawSprites();
}