
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, treeImage;
var ground;
var stone, stoneImage;
var boyImage;
var mango1, mango2, mango3, mango4, mangoImage;
var constraint;

function preload()
{
	treeImage = loadImage("tree.png");
	stoneImage = loadImage("stone.png");
	boyImage = loadImage("boy.png");
	mangoImage = loadImage("mango.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground();

	tree = new Tree(600, 350, 600, 700);

	stone = new Stone(105, 560);

	mango1 = new Mango(220, 130, 50);
	mango2 = new Mango(200, 1, 50);
	mango3 = new Mango(180, 30, 50);
	mango4 = new Mango(200, 50, 50);

	constraint = new Constraint(stone.body, {x:105, y:560});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  tree.display();

  image(boyImage, 180, 625, 250, 250);

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  constraint.display();
  
  drawSprites();
}
