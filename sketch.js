var snow1 = []

function preload(){
  bg=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);

  engine = Matter.Engine.create()
  world = engine.world
  
  
}

function draw() {

  background(bg)  

  Matter.Engine.update(engine)

  if (frameCount%40==0){
snow1.push(new Snow(random(50,750)))
  }
  for(var i = 0;i<snow1.length;i++){
    snow1[i].display()
  }
}