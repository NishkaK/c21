var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  v = createSprite(500,300,20,90)
  v.shapeColor = "blue";
  v.debug = true;
  min = createSprite(550,330,20,90)
  min.shapeColor = "yellow";
  min.debug = true;
  jen = createSprite(660,450,20,90)
  jen.shapeColor = "red";
  jen.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(min,movingRect)){
    movingRect.shapeColor =  "purple";
    min.velocityX = 5;
  }
  else {
    movingRect.shapeColor =  "green";
    min.shapeColor = "yellow";
  }
 
  drawSprites();
}







