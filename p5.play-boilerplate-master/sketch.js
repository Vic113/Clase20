var caja1;
var caja2;
var distanciaCentrosX, distanciaCentrosY;

function setup() {
  createCanvas(800,400);
  caja1 = createSprite(400, 200, 50, 50);
  caja1.shapeColor = ("green")
  caja2 = createSprite(300, 200, 50, 50);
  caja2.shapeColor = ("green")
}



function draw() {
  background(255,255,255);  

  caja2.x = World.mouseX;
  caja2.y = World.mouseY;

  distanciaCentrosX = caja1.width/2 + caja2.width/2;
  distanciaCentrosY = caja1.height/2 + caja2.height/2;

  if(caja1.x - caja2.x <= distanciaCentrosX && caja2.x - caja1.x <= distanciaCentrosX
    && caja1.y - caja2.y <= 50 &&  caja2.y - caja1.y <= 50 ){
    caja2.shapeColor = ("red")
    caja1.shapeColor = ("red")
  }
  else{
    caja1.shapeColor = ("green")
    caja2.shapeColor = ("green")
  }
 

  drawSprites();
}