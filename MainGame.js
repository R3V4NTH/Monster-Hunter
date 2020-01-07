class MainGame {
    constructor(){
    }
     
    play(){
     invisiblePlayer.collide(invisiblePlatform);
      if(keyIsDown(UP_ARROW) && invisiblePlayer.y >= 657){
        invisiblePlayer.setVelocity(0,-12);
      }

      if(keyIsDown(RIGHT_ARROW)){
        invisiblePlayer.position.x = invisiblePlayer.position.x + 5;
      }
      if(keyIsDown(LEFT_ARROW)){
        invisiblePlayer.position.x = invisiblePlayer.position.x - 5;
      }

      invisiblePlayer.velocityY = invisiblePlayer.velocityY + 0.8;

      if(gameState === "lvl1"){
        background(bg);
        fill (255,255,255);
        textSize(40);
        text("Press 1 to attack.", 50, 50);
        textSize(100);
        text ("Level 1",860,300);

        player.attack1();
        if(invisibleEnemy.x <= 490){
          invisibleEnemy.velocityX = invisibleEnemy.velocityX + 6;
          enemy1.image = enemy1ImgR;
        }
        
        if(invisibleEnemy.x >= 1420){
          invisibleEnemy.velocityX = invisibleEnemy.velocityX - 6;
          enemy1.image = enemy1Img;
        }
    }

    if (enemy1.health <= 0 && gameState === "lvl1") {

      gameState = "lvl2";
      enemy1.image = enemy2Img;
      platform1.image = platform2Img;
      enemy1.health = 2000;
      invisibleEnemy.position.x = 1423;
      invisibleEnemy.position.y = 585;
    }

    if(gameState === "lvl2"){
      background(bg2);
      fill (255,255,255);
      textSize(100);
      text ("Level 2",860,300);
      textSize(40);
      text("Press 1 to attack.", 50, 50);
      player.attack1();
      if(invisibleEnemy.x <= 490){
        invisibleEnemy.velocityX = invisibleEnemy.velocityX + 6;
        enemy1.image = enemy2ImgR;
      }
      
      if(invisibleEnemy.x >= 1420){
        invisibleEnemy.velocityX = invisibleEnemy.velocityX - 6;
        enemy1.image = enemy2Img;
      }
    }

    if (enemy1.health <= 0 && gameState === "lvl2") {
      gameState = "lvl3";
      enemy1.image = enemy3Img;
      platform1.image = platform3Img;
      enemy1.health = 3000;
      invisibleEnemy.position.x = 1423;
      invisibleEnemy.position.y = 585;
    }

    if(gameState === "lvl3"){
      background(bg3);
      fill (255,255,255);
      textSize(100);
      text ("Level 3",860,300);
      textSize(40);
      text("Press 1 to attack.", 50, 50);
      player.attack1();
      if(invisibleEnemy.x <= 490){
        invisibleEnemy.velocityX = invisibleEnemy.velocityX + 6;
        enemy1.image = enemy3Img;
      }
      
      if(invisibleEnemy.x >= 1420){
        invisibleEnemy.velocityX = invisibleEnemy.velocityX - 6;
        enemy1.image = enemy3ImgR;
      }
    }

    if (enemy1.health <= 0 && gameState === "lvl3") {
      gameState = "lvl4";
      invisibleEnemy.position.x = 111423;
      invisibleEnemy.position.y =11585;
      invisiblePlayer.setVelocity(0,0);
    }
    }
    end(){
      background(255,255,0);
      fill (255,255,255);
      textSize(100);
      text ("Game Over",760,300);
      invisibleEnemy.position.x = 111423;
      invisibleEnemy.position.y =11585;
      invisiblePlayer.setVelocity(0,0);
    }
}