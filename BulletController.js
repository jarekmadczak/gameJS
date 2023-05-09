class BulletController{
    bullets=[];
    constructor(config){
        this.config=config;
    }
    shoot(bulletx,bullety,bulletspeed,dmg,direction){
            this.bullets[0]=(new Bullet(bulletx,bullety,bulletspeed,dmg,direction));
    }
    draw(ctx,cameraperson){
      
        this.bullets.forEach((bullet) => {
            bullet.draw(ctx,cameraperson);
            setTimeout(() => {
                this.bullets.pop();
            },10);
    })
    }
    collideWith(sprite,cameraperson) {
        this.bullets.forEach((bullet) => {
          if (bullet.collideWith(sprite,cameraperson)) {
            return true;
          }
          return false;
        });
    }      
}