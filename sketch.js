
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	imageMode(CENTER);
	tree = new Tree(700,400,150,200);

	Engine.run(engine);
  
}


function draw() {

  background(230,230,230);
 
  tree.display();

}



