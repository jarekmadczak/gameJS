

class Person extends GameObject{
    constructor(config){
        super(config);
        this.gotDMG=true;
        this.dmg= 5;
        this.hp = 3;
        this.speed = 1;
        this.movingProgressRamaining = 1;
        this.direction = "right";  //last drieciton
        this.attackspeed=500;
        this.stopshooting=true;
        this.heldDriections=[];
        this.directionUpdate= {
            "down": ["y",this.speed],
            "up": ["y",-this.speed],
            "left": ["x",-this.speed],
            "right": ["x",this.speed],
        }
        this.bulletController=new BulletController();
        
    }
    shoot(){
      setInterval(() => {
    
    
        this.bulletController.shoot(this.x,this.y,3,this.dmg,this.direction)
        
      }, this.attackspeed);
            
        
    }
    update(state){
        
        this.updatePosition();
        if(this.movingProgressRamaining=== 0 && state.arrow){
            this.direction = state.arrow;
            this.movingProgressRamaining =1;
            
          
        }
    }
    hitbox(ctx,cameraperson){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x+390-cameraperson.x, this.y+ 280-cameraperson.y, 20, 30); //hitbox
        //Draw Text
        ctx.fillStyle = "white";
        ctx.font = "25px Arial";
            
     
        }

        collideWith(sprite,cameraperson) {
            let x = this.x + 396-cameraperson.x;;
            let y = this.y +300 -cameraperson.y;
            if (
                x < sprite.x+400-cameraperson.x + sprite.width &&
                x+10 > sprite.x+400-cameraperson.x &&
                y-20 < sprite.y +290-cameraperson.y+ sprite.height &&
                y  > sprite.y+290-cameraperson.y
            ) {
              console.log("dostano tyle dmg");
              return true;
            }
          
            return false;   
          
          }

       
        
    updatePosition(){
        if(this.movingProgressRamaining > 0 ){
            const [property,change] = this.directionUpdate[this.direction];
            this[property]+=change;
            this.movingProgressRamaining -=1;
            if(this.stopshooting){
                this.stopshooting=false;
                this.shoot();
                
            }
        }
    }
}