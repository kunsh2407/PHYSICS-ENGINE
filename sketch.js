const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball, object, ground;
var canvas;
var engine, world;
function setup() {
  canvas = createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true

  }
  var ball_options = {
    isStatic: false,
    restitution: 1.0

  }
  ground = Bodies.rectangle(400, 380, 800, 40, options);
  World.add(world, ground);
  ball = Bodies.circle(200, 100, 50, ball_options)
  World.add(world, ball)
  console.log(ground);
  // Engine.run();
}

function draw() {
  background(255, 255, 255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50, 50);
}