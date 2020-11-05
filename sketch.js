//Create variables here
var dogImg,happydog;
var database,foodS,foodStock;
var dog;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale=0.1
 
}


function draw() {  
background('blue');
  
  //add styles here
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);

  }

  drawSprites();
  textFont('cellestar');
  fill('white');
  textSize(25);
 
  text("Food "+foodS,100,100);

}

function readStock(data){

  foodS=data.val();

}

 //Function to write values in DB 
 function writeStock(x){
 if(x<=0){
  x=0; }
    else{
       x=x-1;
       } 
       database.ref('/').update({ Food:x }) }


