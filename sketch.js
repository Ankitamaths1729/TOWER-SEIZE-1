const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball, slingShot,platform,platform2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
     
    box1 = new Box(500,450,50,50);
    box2 = new Box(600,450,50,50);
    box3 = new Box(700,450,50,50);
    box4 = new Box(800,450,50,50);
    box5 = new Box(900,450,50,50);
    box6 = new Bo(550,400,57,57);
    box7 = new Bo(650,400,57,57);
    box8 = new Bo(750,400,57,57);
    box9 = new Bo(850,400,57,57);
    box10 = new Boxes(600,350,53,53);
    box11 = new Boxes(700,350,53,53);
    box12 = new Boxes(800,350,53,53);
    box13 = new Box(650,300,57,57);
    box14 = new Box(750,300,57,57);
    box15 = new Bo(700,250,53,53);
    
    platform2 = new Platform(200,600,200,300);
    platform = new Platform(700,500,500,10);
    ground = new Ground(600,height,1200,20);
    ball = new Ball(100,100);
    
    //log6 = new Log(230,180,80, PI/2);
    sling = new SlingShot(ball.body,{x:180,y:290});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
   
    platform2.display();
    platform.display();
    ground.display();
    ball.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    fill("red");
    textSize(25);
    textFont("Arial Black")
    text("PRESS SPACE TO REATTACH THE HEXAGONAL BALL",200,100);
    sling.display(); 

     

}
function keyPressed(){
    if(keyCode === 32){
       sling.reattach(ball.body);
    }
    }
    
 
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
         sling.fly();

}

