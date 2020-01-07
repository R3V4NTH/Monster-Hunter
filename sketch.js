const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bg, bg2,bg3;

var player, invisiblePlayer, playerImg;
var enemy1, enemy2, enemy3 ,enemy4;
var invisibleEnemy;
var enemy1Img, enemy2Img, enemy3Img ,enemy4Img;
var enemy1ImgR, enemy2ImgR, enemy3ImgR ,enemy4ImgR;
var platform1;
var platform1Img, platform2Img, platform3Img, platform4Img;
var invisiblePlatform;

var pregame, maingame;

var playerLabel = "Player";

var EnemyAttacksGroup, PlayerAttacksGroup;

gameState = "lvl1";

function preload() {
    bg = loadImage("Sky_bg.jpg");
    bg2 = loadImage("Fire_bg.png");
    bg3 = loadImage("bg3.png");
    enemy1Img = loadImage("Green guy.png");
    enemy1ImgR = loadImage("Green guyR.png");
    enemy2Img = loadImage("Flame guy.png");
    enemy2ImgR = loadImage("Flame guyR.png");
    enemy3Img = loadImage("Blue guy.png");
    enemy3ImgR = loadImage("Blue guyR.png");
    platform1Img = loadImage("image_3.png");
    platform2Img = loadImage("platfrm2.png");
    platform3Img = loadImage("platfrm3.png");
    platform4Img = loadImage("image_3.png");


    playerImg = loadAnimation("adventurer-v1.5-Sheet-1.png.png","adventurer-v1.5-Sheet-2.png.png","adventurer-v1.5-Sheet-3.png.png","adventurer-v1.5-Sheet-4.png.png","adventurer-v1.5-Sheet-5.png.png","adventurer-v1.5-Sheet-6.png.png","adventurer-v1.5-Sheet-7.png.png","adventurer-v1.5-Sheet-8.png.png","adventurer-v1.5-Sheet-9.png.png","adventurer-v1.5-Sheet-10.png.png","adventurer-v1.5-Sheet-11.png.png","adventurer-v1.5-Sheet-12.png.png");

}

function setup(){
    var canvas = createCanvas(1920,1080);
    engine = Engine.create();
    world = engine.world;
    
    platform1 = new Platform(960, 840,platform1Img);
  
    player = new Player(660, 690,1000,1,1,1,1,);

    enemy1 = new Enemies(1423, 585, 200, 250, 1000,1,1,1,1,enemy1Img);
    enemy2 = new Enemies(1423, 585, 200, 250, 2000,1,1,1,1,enemy2Img);

    maingame = new MainGame();
        invisiblePlayer.addAnimation(playerLabel,playerImg);
        invisiblePlayer.scale = 5;

}

function draw(){
    maingame.play();

    if (gameState === "lvl4"){
        maingame.end();
    }
    platform1.display();
    enemy1.display();
    player.display();
 
}
