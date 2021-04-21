
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new bob(30,100,50,50);
	bobObject2=new bob(30,200,50,50);
	bobObject3=new bob(30,300,50,50);
	bobObject4=new bob(30,400,50,50);
	bobObject5=new bob(30,500,50,50);
	roofObject=new roof(width/2,670,width,20)
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  drawSprites();
 
}



