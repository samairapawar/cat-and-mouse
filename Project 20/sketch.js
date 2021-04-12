
var bgimg
var cat,mouse

function preload() {
//load the images here
bgimg=loadImage("garden.png")
catimg=loadImage("cat1.png")
cat2img=loadImage("cat2.png")
cat3img=loadImage("cat3.png")
cat4img=loadImage("cat4.png")
mouse1img=loadImage("mouse1.png")
mouse2img=loadImage("mouse2.png")
mouse3img=loadImage("mouse3.png")
mouse4img=loadImage("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


}

function draw() {

    background("bgimg");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing".mouseimg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25;
}

}
