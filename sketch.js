
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400, 200, 250, 20);

	bobObj1 = new Bob(400, 385, 15);
	bobObj2 = new Bob(440, 385, 15);
	bobObj3 = new Bob(360, 385, 15);
	bobObj4 = new Bob(480, 385, 15);
	bobObj5 = new Bob(320, 385, 15);

	rope1 = new Rope(bobObj1.body, roof.body, 10, 0 );
	rope2 = new Rope(bobObj2.body, roof.body, 10, 0 );
	rope3 = new Rope(bobObj3.body, roof.body, 10, 0 );
	rope4 = new Rope(bobObj4.body, roof.body, 10, 0 );
	rope5 = new Rope(bobObj5.body, roof.body, 10, 0 );

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



