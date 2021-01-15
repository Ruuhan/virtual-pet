//Create variables here
var foods
function preload()
{
  //load images here
dogimg=loadImage("images/dogImg.png")
dog1img=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database()
  dog=createSprite(250,250,50,50)
  dog.addImage(dogimg)
  dog.scale=0.2
foodstock=database.ref('Food')
foodstock.on("value",readstock,showerror)
}


function draw() {  
  background(46,139,87)
if(keyDown(UP_ARROW)){
  
  writestock(foods)
  dog.addImage(dog1img)
  
}
  drawSprites();

  //add styles here
fill("black")
textSize(25)
  text("food remaining "+foods,400,200)
text("press up arrow to feed milk",400,250)
}
function readstock(data) {
foods=data.val()

}
function writestock(foods){
  if(foods<0){
    foods=0
  }
  else{
    foods=foods-1
  }
  database.ref('/').update({
    Food:foods
  })
}
function showerror(){
console.log("unable to read values") 
}



