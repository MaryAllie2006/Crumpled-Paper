
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(50,650,20,20);

	dustbin1= new Dustbin(600,650,100,20);
	dustbin2= new Dustbin(550,610,20,100);
	dustbin3= new Dustbin(650,610,20,100)

	ground=new Ground(500,680,1000,45);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();
  
  paper.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
	}
  }
  


