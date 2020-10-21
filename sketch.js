const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var released = false;
var score = 0;

var bgcolor;
function preload(){
	polygon_img = loadImage("Hexagon.png");
}

function setup() {
	createCanvas(1200, 700);
	setGameTime();

	engine = Engine.create();
	world = engine.world;

	stand1 = new Ground(600,650,350,20);
	stand2 = new Ground(1000,450,250,20);

	//pyramid 1
	//floor 1
	block1 = new Box(480,610,40,50,"cyan");
	block2 = new Box(520,610,40,50,"cyan");
	block3 = new Box(560,610,40,50,"cyan");
	block4 = new Box(600,610,40,50,"cyan");
	block5 = new Box(640,610,40,50,"cyan");
	block6 = new Box(680,610,40,50,"cyan");
	block7 = new Box(720,610,40,50,"cyan");
	//floor 2
	block8 = new Box(520,580,40,50,"pink");
	block9 = new Box(560,580,40,50,"pink");
	block10 = new Box(600,580,40,50,"pink");
	block11= new Box(640,580,40,50,"pink");
	block12 = new Box(680,580,40,50,"pink");
	//floor 3
	block13 = new Box(560,550,40,50,"lightgreen");
	block14 = new Box(600,550,40,50,"lightgreen");
	block15= new Box(640,550,40,50,"lightgreen");
	//floor 4
	block16 = new Box(600,520,40,50,"gray");
	//pyramid 1 over

	//pyramid 2
	//floor 1
	block17 = new Box(920,400,40,50,"cyan");
	block18 = new Box(960,400,40,50,"cyan");
	block19 = new Box(1000,400,40,50,"cyan");
	block20= new Box(1040,400,40,50,"cyan");
	block21 = new Box(1080,400,40,50,"cyan");
	//floor 2
	block22 = new Box(960,370,40,50,"lightgreen");
	block23 = new Box(1000,370,40,50,"lightgreen");
	block24= new Box(1040,370,40,50,"lightgreen");
	//floor 3
	block25 = new Box(1000,340,40,50,"pink");
	//pyramid 2 over

	//hexagon
	hexagon = Bodies.circle(100,200,22,{density:3,friction:0.2});
	World.add(world,hexagon);

	sling = new SlingShot(hexagon,{x:100,y:200})

	Engine.run(engine);
	rectMode(CENTER);
	imageMode(CENTER);
}

function draw() {
	if(bgcolor){
		background(bgcolor);
	}else{
		background("grey");
	}

  
	text("Score: "+score, 750, 40);

	stand1.display();
	stand2.display();
	//pyramid 1
	//floor 1
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	//floor 2
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	//floor 3
	block13.display();
	block14.display();
	block15.display();
	//floor 4 
	block16.display();
	//pyramid 1 over

	//pyramid 2
	//floor 1
	block17.display();
	block18.display();
	block19.display();
	block20.display();
	block21.display();
	//floor 2
	block22.display();
	block23.display();
	block24.display();
	//floor 3
	block25.display();
	//pyramid 2 over

	image(polygon_img,hexagon.position.x,hexagon.position.y+10,40,40);
}

function mouseDragged(){
	Body.setPosition(hexagon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if(keyCode == 32){
		Body.setPosition(hexagon,{x:100,y:200});
		sling.attach(hexagon);
	}
}

async function setGameTime(){
	fullfile = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
	fullJson = await fullfile.json();
	dateTime = fullJson.datetime;
	hour = dateTime.slice(11,13);

	if(hour < 18 && hour > 6){
		bg = color(255,255,0);
	}else{
		bg = color(50,70,100)
	}

	bgcolor = bg;
}
