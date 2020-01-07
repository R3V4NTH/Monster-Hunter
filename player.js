class Player{
    constructor(x, y, health, atk1,atk2) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        invisiblePlayer = createSprite(x,y);
        invisiblePlayer.visible = true;
        this.body = Bodies.rectangle(invisiblePlayer.position.x,invisiblePlayer.position.y, 20, 40, options);
        this.width = 150;
        this.height = 200;
        World.add(world, this.body);

      }
    attack1(){
        var attack1 = createSprite();
        if(keyWentDown(49) && invisiblePlayer.overlap(invisibleEnemy)){
            enemy1.health = enemy1.health - 100;
        }
    }
      
    display(){
        drawSprites();
    }
}
