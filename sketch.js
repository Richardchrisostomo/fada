var starImg,bgImg,fada,imgfada;
var star, starBody;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
    //carregar animação de fada 
    imgfada=loadAnimation("images/fada.png","images/fada2.png","images/fada.png");
    som=loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(1300, 670);

    //escrever código para tocar o som vozFada
som.play();
    //criar sprite de fada e adicionar animação para fada
    fada=createSprite(200,200);
     fada.addAnimation("fada",imgfada);
    fada.scale=0.2
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
background(bgImg);    
if(keyDown("a")){
fada.x-=5;    
}
if(keyDown("d")){
fada.x+=5;    
}
star.x=starBody.position.x
star.y=starBody.position.y
if(keyDown("space")){
Matter.Body.setStatic(starBody,false)
}
if(star.y>150 && starBody.position.y>150){
Matter.Body.setStatic(starBody,true);
    

}



drawSprites();

}