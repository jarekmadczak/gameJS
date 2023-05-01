class Sprite {
    constructor(config) {
  
    
      this.image = new Image();  
      this.image.src = config.src; //z  podanych bierzemy src
      this.image.onload = () => {
        this.isLoaded = true;
      }
  
    
  
      
      this.gameObject = config.gameObject;  
    }

    draw(ctx,cameraperson){
        let x = this.gameObject.x + 350-cameraperson.x;
        let y = this.gameObject.y + 230-cameraperson.y;
        let wycinek = this.gameObject.wycinek;
       
       if(this.isLoaded)
            ctx.drawImage(this.image,
                0,// skad starujemy wycinac ;
                0,// gdzie konczymy
                wycinek,//width
                wycinek,//height
                x,
                y,
                128,
                128 //siuze 
                ); 

        }
    
 
}