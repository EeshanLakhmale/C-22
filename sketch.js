const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  
myEngine = Engine.create();
myWorld = myEngine.world;

var groundOption = {
  isStatic: true
}

var bounce = {
  restitution: 2
}

ground = Bodies.rectangle(200,380,400,10,groundOption);
World.add(myWorld,ground);

ball = Bodies.circle(200,200,20,bounce);
World.add(myWorld,ball);

console.log(ball);

}

function draw() {
  background(0);  

  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);

}