var wall, car;

function setup() {
  createCanvas(1200,800);
  wall = createSprite(1150, 45, 50, 80);
  wall.shapeColor = "grey";
  wall.debug = true;
car = createSprite(50,200,50,50);
  car.shapeColor = "grey";
 car.debug = true;
}

function draw() {
  background(0,0,0);  
  car.x = World.mouseX;
  car.y = World.mouseY;

  console.log(car.x)
  
  if (car.x - wall.x < wall.width/2 + car.width/2
      && wall.x - car.x < wall.width/2 + car.width/2
      &&car.y - wall.y < wall.height/2 + car.height/2
      && wall.y - car.y < wall.height/2 + car.height/2) {
    car.shapeColor = "red";
    wall.shapeColor = "red";
  }
  else {
    car.shapeColor = "grey";
    wall.shapeColor = "grey";
  }
  drawSprites();
}