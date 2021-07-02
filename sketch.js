var dog;
var happyDog;
var dataBase;
var foodS;
var foodStock;

function preload()
{
  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale=0.2;

  database=firebase.database();

  foodStock = database("Food");
  foodStock.on("value",readtock);
  
}


function draw() {  

  backround("yellow");

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(dogImg1);

   
  }

  drawSprites();
  
  fill("red");
  textSize(20);
  text("PRESS UP_ARROW KEY TO FEED",100,50);
  text("Food: "=foodS,100,100);

 

}

function readStock(data){

  foodS = data.val(20);
}

function writeStock(x){

  x = x-1;

  data.ref("/").update({

    Food:x

  })

  display()

    var x=80,y=100;

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if (i%10==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }

      feedTime=database.ref('FeedTime');
      feedTime.on("value",function(data){
        lastFed=data.val();
      })
    }
  }
  




