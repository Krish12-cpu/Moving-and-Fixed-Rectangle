var fixedRect, movingRect, rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
 
  rect1 = createSprite(200,300,20,40);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect2 = createSprite(100,250,30,30);
  rect2.shapeColor = "green";
  rect2.debug = true;
  rect3 = createSprite(400,150,20,40);
  rect3.shapeColor = "green";
  rect3.debug = true;
  rect4 = createSprite(450,100,50,60);
  rect4.shapeColor = "green";
  rect4.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(istouching(rect1)||istouching(rect2) ||istouching(rect3) || istouching(rect4) ||istouching(fixedRect)){
  movingRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
}

  
  drawSprites();
}


