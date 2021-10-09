class Computerplayer {
    constructor(x,y,width,height) {
        this.width = width
        this.height = height

        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("assets/player.png");
        World.add(world,this.body);
    }
    display() {
        push()
        translate(
            this.body.position.x,this.body.position.y
        )
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}