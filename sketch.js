// Porfa lee todos los comentarios, Lo estás haciendo muy bien. 
var path,boy, leftBoundary,rightBoundary;
var pathImg, boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  //Juan recuerda que aqui guardamos la imagen en la variable
  //es decir usamos el igual = así: 
  
  pathImg = loadImage("path.png");
  //loadAnimation de boy (niño)
  // Recuerda que las imagenes deben estar separadas por coma  
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) recuerda que si tienes la variable creada en la 
 //parte superior no debes usar var aqui :)
 path = createSprite(200,200);
 //agregar imagen de path
 path.addImage("path", pathImg);
 //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
 path.velocityY = 4;
 path.scale = 1.2;

 //crear sprite de boy (niño)
 // Recuerda no usar la palabra var aqui, ya la tienes declarada al inicio del código
 boy = createSprite(200,200,30,30)
 //agregar animación para boy
 boy.addAnimation("boyrun", boyImg)
 boy.scale = 0.08;
  
 // crear  left Boundary (límite izquierdo)
 leftBoundary=createSprite(0,0,100,800);
 ////establecer visibilidad como false (falso) para límite izquierdo
 leftBoundary.visibility = false;

 //crear right Boundary (límite derecho)
 rightBoundary=createSprite(410,0,100,800);
 //establecer visibilidad como false (falso) para límite izquierdo
 rightBoundary.visibility = false
}

function draw() {
  background(0);

  // Recuerda agregar la velocidad al camino
  path.velocityY = 4;
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
