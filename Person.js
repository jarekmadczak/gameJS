

class Person extends GameObject{
    constructor(config){
        super(config);
        this.dmg= 5;
        this.hp = 10;
        this.speed = 1;
        this.movingProgressRamaining = 1;
        this.direction = "right";  //last drieciton
        this.attackspeed=1000;
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