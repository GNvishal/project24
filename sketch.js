var ball;
var ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxPosition = width/2-100;
	boxY = 610;
	boxLeft = createSprite(boxPosition,boxY,20,100);
	boxLeft.shapeColor = ("red")
	boxLeftBody = Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
	World.add(world,boxLeftBody);

	boxBase = createSprite(boxPosition+100,boxY+40,200,20);
	boxBase.shapeColor = ("red")
	boxBaseBody = Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{isStatic:true});
	World.add(world,boxBaseBody);

	boxRight = createSprite(boxPosition+200-10,boxY,20,100);
	boxRight.shapeColor = ("red")
	boxRightBody = Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true});
	World.add(world,boxRightBody);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
	   
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
 
	}
 }


