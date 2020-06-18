var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
 
 movingrect = createSprite(550,350,20,50);
fixedrect = createSprite(650,200,50,20);
fixedrect2 = createSprite(200,200,50,20);
movingrect.shapeColor="blue"
fixedrect.shapeColor= "green";
}



function draw() {
  background(0);  
 movingrect.x=World.mouseX;
 movingrect.y=World.mouseY;
 
  if (istouching (fixedrect2,movingrect)){
movingrect.shapeColor="red"
fixedrect2.shapeColor="red"
  }
 else{

movingrect.shapeColor="blue"
fixedrect2.shapeColor="yellow"
 }
 
 
 drawSprites();
}

function istouching(object1,object2){
  if (object1.x-object2.x <= object2.width/2+object1.width/2
    && object2.x-object1.x<=object2.width/2+object1.width/2 
   && object2.y-object1.y<=object2.height/2+object1.height/2
   && object1.y-object2.y<=object2.height/2+object1.height/2 ){
return true;
}

else{

return false;




}}