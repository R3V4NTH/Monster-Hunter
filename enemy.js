class Enemies{
    constructor(x,y, width, height,health,atk1,atk2,atk3,atk4,img) {
      invisibleEnemy = createSprite(x,y);
      invisibleEnemy.visible = false;
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.health = health;
        World.add(world, this.body);
        this.image = img;
      }
      
      display(){
        imageMode(CENTER);
        image(this.image, invisibleEnemy.position.x, invisibleEnemy.position.y,this.width,this.height);
    }
    
}
