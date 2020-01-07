class Platform {
    constructor(x, y,img) {
        
        invisiblePlatform = createSprite(x,y,800, 200);
        invisiblePlatform.visible = false;

        this.body = Bodies.rectangle(x, y, 400, 20);
        this.width = 400;
        this.height = 20;
        this.image = img;
        World.add(world, this.body);
      }
      
      display(){
        imageMode(CENTER);
        image(this.image, invisiblePlatform.position.x, invisiblePlatform.position.y, 1200, 400);
      }

}
