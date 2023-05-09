class Enemy_Slime extends GameObject{
    constructor(config){
        super(config);
        this.zabito=false;
        this.dmg= 1;
        this.hp = 10;
        this.speed = 0.5;
        this.width=this.wycinek;
        this.height=this.wycinek;
        this.xp=1;
       
    }
    
    draw(ctx,cameraperson) {
        ctx.fillStyle = this.color;
        if (this.health > 1) {
          ctx.strokeStyle = "white";
        } else {
          ctx.strokeStyle = this.color;
        }
        //hit box
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
      update(player_position){
        
       this.goTo(player_position.x,player_position.y);
       
    }  
      
      goTo(targetX, targetY){
            const opp = targetY - this.y ;
            const adj = targetX - this.x-10;
        
            const angle = Math.atan2(opp,adj)
            this.x += Math.cos(angle)*this.speed
            this.y += Math.sin(angle)*this.speed
          
        }
    
}