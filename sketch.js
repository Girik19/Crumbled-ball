var ball
var dustbin
var groundIMG,ground
var world,engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload (){

  groundIMG=loadImage("ground.png");

}

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
    world = engine.world;

    ground=new Ground(width/2,670,width,20)

    ball=new Ball(200,450,40);

    dustbin=new Dustbin(1000,500,40,40);

    Engine.run(engine)

    
}

function draw() {
  background(0);
  
  ball.display();
  dustbin.display();
  ground.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
  }
}