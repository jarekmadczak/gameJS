class Bullet {
    constructor(x, y, speed, damage,direction) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.width = -100;
        this.height = -10;
        this.lowwer=50;
        this.up=128;
        this.color = "brown";
        this.image = new Image(); 
        this.image.src = "images/sword.png"
        this.tookdmg = true;
        this.direction=direction
       this.as=true;
       this.map={
            
        "down": [10,100,],//width heigt
        "up": [10,100],
        "left": [100,10],
        "right": [100,10]
        
      }
      }
    
      draw(ctx,cameraperson) {
        if(this.as){
          console.log(this.direction);

          if(this.direction=="up"){
            this.x = this.x + 396-cameraperson.x;
            this.y = this.y + 300-cameraperson.y-100;
            this.lowwer=40;
             this.up=128;
            this.image.src="images/sword.png"
          }else if(this.direction=="left"){
            this.x = this.x + 396-cameraperson.x-100;
            this.y = this.y + 300-cameraperson.y;
            this.image.src="images/swordl.png"
            this.lowwer=128;
            this.up=40;
          }else if(this.direction=="right"){
          this.x = this.x + 396-cameraperson.x;
          this.y = this.y + 300-cameraperson.y;
          this.image.src="images/swordr.png"
          this.lowwer=128;
          this.up=40;
          }else{
            this.x = this.x + 396-cameraperson.x;
            this.y = this.y + 300-cameraperson.y;
            this.image.src="images/swordd.png"
            this.lowwer=40;
            this.up=128;
          }
          this.width=this.map[this.direction][0];
          this.height=this.map[this.direction][1];
          this.as=false;
          
          
        }
       ctx.drawImage(this.image,
        0,// skad starujemy wycinac ;
        0,// gdzie konczymy
        40,//width
        40,//height
        this.x-5,
        this.y,
        this.lowwer,
        this.up //siuze 
        ); 
        
      }

      collideWith(sprite,cameraperson) {
         
        if (
          this.x < sprite.x+400-cameraperson.x + sprite.width &&
          this.x + this.width > sprite.x+400-cameraperson.x &&
          this.y < sprite.y +290-cameraperson.y+ sprite.height &&
          this.y + this.height > sprite.y+290-cameraperson.y
        ) {
          this.tookdmg=false;
          sprite.takeDamage(this.damage);
          console.log("zadano "+this.damage);
          return true;
        }
      
        return false;
        
      
      }

      
}