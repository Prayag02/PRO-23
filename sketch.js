const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerbase = new Computerbase(800,500,150,150);
  computerplayer = new Computerplayer(800,400,75,75);
  player = new Player(200,400,75,75);
  playerbase = new Playerbase(200,500,150,150);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    playerbase.display();
    computerbase.display();

   //display Player and computerplayer
    player.display();
    computerplayer.display();

}
