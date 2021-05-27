var garden
var cat1
var cat2
var cat3
var cat4
var mouse1 
var mouse2
var mouse3
var mouse4 
var tom
function preload() {
    //load the images here
    garden=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png")
    cat4=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadAnimation("images/mouse4.png")
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870, 650)
    tom.addAnimation("cat", cat1)
    tom.scale=0.2
    jerry=createSprite(200, 600)
    jerry.addAnimation("mouse",mouse1)
    jerry.scale=0.2
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
        tom.velocityX=0
        tom.addAnimation("img3", cat3);
        tom.x=300
        tom.changeAnimation("img3");

        
        jerry.addAnimation("img", mouse3);
        jerry.changeAnimation("img");
    

    }

    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("running", cat2);
        tom.changeAnimation("running")
        
        jerry.addAnimation("tease", mouse2);
        jerry.changeAnimation("tease");

    }
  
       

}

