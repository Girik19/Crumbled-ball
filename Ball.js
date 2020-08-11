class Ball{
    constructor(x,y,r){
var options={
    isStatic:false,
    restitution:1,
    friction:0.5,
    density:1.2
} 
this.x=x;
this.r=r;
this.y=y;
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)
    }
display(){
    var ballposition=this.body.position 
    push();
    translate(ballposition.x,ballposition.y)
    strokeWeight(3)
    fill("purple")
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop()
}
}