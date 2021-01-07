const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var spaceship

function preload() {
    backgroundImg = loadImage("sprites/bg1.jpg");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    spaceship = new Spaceship(50,200,70,70);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    spaceship.display();    
}


/*function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}




function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}*/