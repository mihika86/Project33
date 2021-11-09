class Snow{
    constructor(x){
        this.body = Matter.Bodies.circle(x,10,10)
        Matter.World.add(world,this.body)
        this.image = loadImage("snow5.webp")
        this.x = x
        this.y = 10
        this.r = 10

    }
    display(){
        imageMode (CENTER)
        image (this.image, this.body.position.x, this.body.position.y,30,30)
    }
}