const World = Matter.World;
const Engine = Matter.Engine
const Bodies = Matter.Bodies


var engine, world;
var ball;
var ground;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;


  var options={
    isStatic:true,

  }

  ground= Bodies.rectangle(400,790,790,20, options);
  World.add(world,ground);
  
  var ball_options={restitution : 1.0}
  ball = Bodies.circle(400,400,40, ball_options);
   World.add(world,ball);
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  
  
  
  
rectMode(CENTER);
rect(ground.position.x,ground.position.y,790,20);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40);
  
}