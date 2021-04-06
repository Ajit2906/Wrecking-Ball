const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var ground
function setup() {
  createCanvas(800,400);
   engine = Engine.create();
    world = engine.world;
   ground = new Ground(400,390,800,30);
   wall1 = new Wall(500,340)
   wall2 = new Wall(500,280)
   wall3 = new Wall(500,200)
   wall4 = new Wall(500,140)
   ball = new Ball(200,300)
   rope = new Rope(ball.body,{x:200,y:50})
  }



function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  ball.display();
  rope.display();

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}