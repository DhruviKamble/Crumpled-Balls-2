const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, paperIMG;
var ground;
var lBox, rBox, bBox;
var dustbinImage;

function preload() {
	dustbinImage = loadImage("dustbingreen.png");
	paperIMG = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperImage = new Paper(100,350,20);
	ground = new Ground(400, 675, 800, 7);

	lBox = new Box(600, 625, 7, 90);
	rBox = new Box(680, 625, 7, 90);
	bBox = new Box(640, 675, 90, 7);


	Engine.run(engine);
  
}


function draw() {
  background('lightgray');
  
  lBox.display();
  rBox.display();
  bBox.display();

  paperImage.display();
  
  image(dustbinImage,590,575,100,100);

  ground.display();
}

function keyPressed() {
	if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paperImage.body, paperImage.body.position, {x:60,y:-60});
	}
}
