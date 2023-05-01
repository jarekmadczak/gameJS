class Overword {
    constructor(config){
        this.element = config.element;  
        this.canvas = this.element.querySelector(".game-canvas")
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
        this.heldDirections = [];
        this.shooting= [];
        this.monety=0;
        this.zabite=0;
        this.iloscwroga=2;
        this.iloscwrogow=2;
        this.XP=0;
        this.lvl=0;
    }
    
   

    StartGameLoop(){
        const step = () =>{

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const cameraperson = this.map.persons.hero;
            
    this.map.DrawMap(this.ctx,cameraperson);
//gracz
    Object.values(this.map.persons).forEach(object => {
        object.update({
            arrow: this.heldDirections[0]
        })
        object.sprite.draw(this.ctx,cameraperson);
        this.ctx.fillText(
            "HP: "+ object.hp+" "+"XP:"+this.XP,
           0,30
          );
          this.ctx.fillText(
            "zabici wrogowie:"+this.zabite,
           570,30
          );
       
        object.bulletController.draw(this.ctx,cameraperson);
      })
      

//moby
Object.values(this.map.enemys).forEach(object => {
    Object.values(this.map.persons).forEach(ob => {
    if(object.hp<=0 ){ //zabioto
    if(object.zabito==false)
     {  this.zabite++;
        this.monety++;
        this.XP++;
        this.iloscwroga--;
        console.log(this.zabite, this.monety,this.iloscwroga);
        object.zabito=true;  
        if(this.iloscwroga==0){
            
            this.iloscwrogow++;
            this.iloscwroga=this.iloscwrogow;
        for(let i=0;i<this.iloscwrogow;i++){
            
            
            this.map.enemys[i] = new Enemy_Slime({
                x:Math.floor(Math.random() * 200),
                y:Math.floor(Math.random() * 200),
                src:"images/characters/slime.png",
                wycinek:32
              });
            
        }
        }  
    }
        
    }else{
    object.sprite.draw(this.ctx,cameraperson);
 
            
        if (ob.bulletController.collideWith(object,cameraperson)) {
        } else {
            object.draw(this.ctx,cameraperson);
        }
   
}
  })
})




  requestAnimationFrame(()=>{  //nieskonczona pedntal co frame klatke 
                step();
            })
        }
        step();
    }

    init(){
        this.map = new OverworldMap(window.OverworldMaps.FLOOR1);
        //chodzenie postacia
        
        
          let  mapa = {
                "KeyW" : "up",
                "KeyA" : "left",
                "KeyS" : "down",
                "KeyD" : "right"
            }
            document.addEventListener("keydown",(e)=>{
                const direct = mapa[e.code];
                if(direct && this.heldDirections.indexOf(direct)===-1 ){
                    this.heldDirections.unshift(direct); //dodaje
                    
                }
        })
        document.addEventListener("keyup",(e)=>{
            const direct = mapa[e.code];
            let index= this.heldDirections.indexOf(direct);
            if(index>-1){
                this.heldDirections.splice(index,1); //usuwa index
             
            }
    })

        this.StartGameLoop();
       
    }
    
}