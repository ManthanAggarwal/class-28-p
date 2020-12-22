
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree(200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245,56,75);
  tree.display();
  drawSprites();
 
}



