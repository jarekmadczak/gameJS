class Enemy_Slime extends GameObject{
    constructor(config){
        super(config);
        this.zabito=false;
        this.dmg= 1;
        this.hp = 10;
        this.speed = 1;
        this.width=this.wycinek;
        this.height=this.wycinek;
    
    }
    draw(ctx,cameraperson) {
        ctx.fillStyle = this.color;
        if (this.health > 1) {
          ctx.strokeStyle = "white";
        } else {
          ctx.strokeStyle = this.color;
        }
        
        //ctx.fillRect(this.x+400-cameraperson.x, this.y+ 290-cameraperson.y, this.width, this.height); //hitbox
        //Draw Text
        ctx.fillStyle = "white";
        ctx.font = "25px Arial";
        ctx.fillText(
          this.hp,
          this.x + 396-cameraperson.x + this.width / 3.5,
          this.y + 270-cameraperson.y+ this.height / 1.5
        );
      }
    
      takeDamage(damage) {
        this.hp -= damage;
      }
}