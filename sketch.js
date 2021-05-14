
function preload() {
    Bg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png")
    catImg3=loadAnimation("images/cat3.png")
    catImg4=loadAnimation("images/cat4.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png")
    mouseImg3=loadAnimation("images/mouse3.png")
    mouseImg4=loadAnimation("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(870,600)
cat.addAnimation("cat",catImg1)
cat.scale=0.2
mouse=createSprite(200,600)
mouse.addAnimation("mouse",mouseImg1)
mouse.scale=0.15
}

function draw() {

    background(Bg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catlastImg",catImg3)
cat.scale=0.2
cat.changeAnimation("catlastImg")
        cat.x=300
        mouse.addAnimation("mouselastImg",mouseImg3)
        mouse.scale=0.15
         mouse.addAnimation("mouselastImg")


    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("catrunning",catImg2)
    cat.changeAnimation("catrunning")
    mouse.addAnimation("mouserunning",mouseImg2)
    mouse.changeAnimation("mouserunning")
    

}
  //For moving and changing animation write code here


}
