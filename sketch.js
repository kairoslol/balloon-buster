
var redballoon, rbimg;
var greenballoon, gbimg;
var pinkballoon, pbimg;
var blueballoon, bbimg;

var bg, bgimg;

var bow, bowimg;

var arrowimg;

var arrowGroup, bluegroup, greengroup, redgroup, pinkgroup;

var score;


function preload(){
 //load your images here 
 bgimg = loadImage("background0.png");
 rbimg = loadImage("red_balloon0.png");
 gbimg = loadImage("green_balloon0.png");
 pbimg = loadImage("pink_balloon0.png");
 bbimg = loadImage("blue_balloon0.png");
 bowimg = loadImage("bow0.png");
 arrowimg = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  bg = createSprite(300,300,200,200);
  bg.addImage("background",bgimg);
       bg.x = bg.width/2;
  bg.scale = 5;
  
  //add code here
  bg.velocityX = -2;
  bow = createSprite(550,200,200,200);
  bow.addImage("bow0.png", bowimg);
  
  score = 0;
  
  
  
  
arrowGroup = new Group();
bluegroup = new Group();
redgroup = new Group();
pinkgroup = new Group();
greengroup = new Group();

}



function draw() {
  background("grey");
  //add code here
  if(bg.x <0){
     bg.x = bg.width/2; 
 }
  
 
  
 if (keyWentUp("space")){
  var arrow = createSprite(550,450,200,200);
   arrow.addImage("arrow0.png",arrowimg);
   arrow.scale =   0.2;
     arrow.y = bow.y 
   arrow.velocityX = -5;
   arrow.lifetime = 150;
   arrowGroup.add(arrow);
   } 
  
  
bow.y = mouseY;  
  
  if(frameCount % 10 === 0){
     var selection = Math.round(random(1,4));
     if(selection === 1){
          greenballoon();
        
       }
    if(selection === 2){
       blueballoon();
        
         }
    
    if(selection === 3){
         redballoon();
        
           }
    
    if(selection === 4){
        pinkballoon();
      
             }
    
    
     
   }
  

  
  if (arrowGroup.isTouching(redgroup)){
    redgroup.destroyEach();
  arrowGroup.destroyEach();
  score = score + 1;
  
    }
  
   if (arrowGroup.isTouching(bluegroup)){
    bluegroup.destroyEach();
  arrowGroup.destroyEach();
  score = score + 2;
  
    }
  
  
   if (arrowGroup.isTouching(greengroup)){
    greengroup.destroyEach();
  arrowGroup.destroyEach();
  score = score + 3;
  
    }
  
  
   if (arrowGroup.isTouching(pinkgroup)){
    pinkgroup.destroyEach();
  arrowGroup.destroyEach();
  score = score + 4;
  
    }
  
  
  
  
  
  
  


  drawSprites();
  textSize(20);
  fill("black");
  text(score,550,40);
}

  

  
  

function redballoon(){
//  for(var y = 100; y < 550; y = y + 70) {
  if (frameCount % 300 === 0){
      
      
      
    var y = Math.round(random(20,570));   
   var redballoon = createSprite(50,y,200,200);
  redballoon.addImage("red_balloon0",rbimg);
    redballoon.scale = 0.1;
    redballoon.velocityX = 2;
    redballoon.lifetime  = 300;
  redgroup.add(redballoon);
  }
 // }
}

function blueballoon(){
  if (frameCount % 300 === 0){
    var y = Math.round(random(20,570));
   var blueballoon = createSprite(0,y,200,200);
  blueballoon.addImage("blue_balloon0",bbimg);
    blueballoon.scale = 0.12;
    blueballoon.velocityX = 2;
    blueballoon.lifetime  = 300;
    bluegroup.add(blueballoon);
}
}


function greenballoon(){
 if (frameCount % 300 === 0){
  var y = Math.round(random(20,570));
   var greenballoon = createSprite(0,y,200,200);
  greenballoon.addImage("green_balloon0",gbimg);
    greenballoon.scale = 0.1;
    greenballoon.velocityX = 2;
    greenballoon.lifetime  = 300;
   greengroup.add(greenballoon);
 }
}

function pinkballoon(){
 if (frameCount % 300 === 0){
  var y = Math.round(random(20,570));
   var pinkballoon = createSprite(0,y,200,200);
  pinkballoon.addImage("pink_balloon0",pbimg);
    pinkballoon.scale = 1.23;
    pinkballoon.velocityX = 2;
    pinkballoon.lifetime  = 300;
   pinkgroup.add(pinkballoon)
  }
}