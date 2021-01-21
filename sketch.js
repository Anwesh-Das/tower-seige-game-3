const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot;

var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;

var polygon;

var score = 0;

var bg;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,392,1200,20);
    ground2 = new Ground(600,340,240,20);
    ground3 = new Ground(1000,260,220,20);

    box1 = new Box(520,308,30,45,"red");
    box2 = new Box(560,308,30,45,"red");
    box3 = new Box(600,308,30,45,"red");
    box4 = new Box(640,308,30,45,"red");
    box5 = new Box(680,308,30,45,"red");
    box6 = new Box(540,260,30,45,"blue");
    box7 = new Box(580,260,30,45,"blue");
    box8 = new Box(620,260,30,45,"blue");
    box9 = new Box(660,260,30,45,"blue");
    box10 = new Box(560,215,30,45,"yellow");
    box11 = new Box(600,215,30,45,"yellow");
    box12 = new Box(640,215,30,45,"yellow");
    box13 = new Box(580,165,30,45,"green");
    box14 = new Box(620,165,30,45,"green");
    box15 = new Box(600,120,30,45,"lightblue");
    box16 = new Box(920,225,30,45,"blue");
    box17 = new Box(960,225,30,45,"blue");
    box18 = new Box(1000,225,30,45,"blue");
    box19 = new Box(1040,225,30,45,"blue");
    box20 = new Box(1080,225,30,45,"blue");
    box21 = new Box(940,175,30,45,"green");
    box22 = new Box(980,175,30,45,"green");
    box23 = new Box(1020,175,30,45,"green");
    box24 = new Box(1060,175,30,45,"green");
    box25 = new Box(960,125,30,45,"yellow");
    box26 = new Box(1000,125,30,45,"yellow");
    box27 = new Box(1040,125,30,45,"yellow");
    box28 = new Box(980,80,30,45,"lightgreen");
    box29 = new Box(1020,80,30,45,"lightgreen");
    box30 = new Box(1000,30,30,45,"red");

    polygon = new Polygon(50,200,40);

    slingshot = new Slingshot(polygon.body,{x : 100,y : 200});

}

function draw(){
    bg = backgroundimg()
    background(bg);
    Engine.update(engine);
    strokeWeight(4);
    ground1.display();  
    ground2.display();
    ground3.display(); 
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
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    slingshot.display();
    polygon.display();
    
    textSize(20)
    fill("white")
    text("SCORE : " + score,750,40)

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();

}                    

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x : mouseX,y : mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon.body);
    }
}

async function backgroundimg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour >= 06 && hour <= 19){
       background = "white";
    }
    else{
        background = "black";
    }
}