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
        this.PlayerAlive=true
        this.XPRequired=5;
        this.ChooseingWeapon=true;
        this.menu=new menu();
        this.iloscUlepszen=0;
       
    }
    
   

    StartGameLoop(){
        const step = () =>{
           
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const cameraperson = this.map.persons.hero;
            
    this.map.DrawMap(this.ctx,cameraperson);
//gracz
    Object.values(this.map.persons).forEach(object => {
        if(object.hp<1){
            this.PlayerAlive=false;
        }
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
          //object.hitbox(this.ctx,cameraperson);
        object.bulletController.draw(this.ctx,cameraperson);
      })
      

//moby
Object.values(this.map.enemys).forEach(object => {
    Object.values(this.map.persons).forEach(ob => {
        
    if(object.hp<=0 ){ //zabioto
    if(object.zabito==false)
     {  this.zabite++;
        this.monety++;
        this.XP+=object.xp;
        this.iloscwroga--;
        if(this.XP==this.XPRequired){
            this.ChooseingWeapon=false;
        }
        
        object.zabito=true;  
        if(this.iloscwroga==0){
            
            this.iloscwrogow++;
            this.iloscwroga=this.iloscwrogow;
        for(let i=0;i<this.iloscwrogow;i++){
            if(i%2==0){
                this.map.enemys[i] = new Enemy_Slime({
                    x:Math.floor(ob.x+100+Math.random() * 200),
                    y:Math.floor(ob.y+Math.random() * 200),
                    src:"images/characters/slime.png",
                    wycinek:32
                  });
            }else{
                this.map.enemys[i] = new Enemy_Slime({
                    x:Math.floor(ob.x-100-Math.random() * 200),
                    y:Math.floor(ob.y-Math.random() * 200),
                    src:"images/characters/slime.png",
                    wycinek:32
                  });
            }

            
            
            
        }
        }  
    }
        
    }else{
        
    object.sprite.draw(this.ctx,cameraperson);
    //ob.hitbox(this.ctx,cameraperson);
    console.log(ob.gotDMG)
    if(ob.gotDMG){
       
    if (ob.collideWith(object,cameraperson)) {
        setTimeout(function () {
                ob.gotDMG=true;

        }, 1000)
        ob.gotDMG=false;
        ob.hp-=object.dmg
    
        }
        
    } 
        if (ob.bulletController.collideWith(object,cameraperson)) {
        } else {
            object.draw(this.ctx,cameraperson);
        }
        object.update(ob);
}
  })
})



if(this.ChooseingWeapon){
   
if(this.PlayerAlive ){//&& this.ChooseingWeapon){//pauzujemy gre do menu i deda 
  requestAnimationFrame(()=>{  //nieskonczona pedntal co frame klatke  
                step();
            })
        }else{
            this.menu.AfterDeathMenu(this.ctx,this.canvas,this.zabite,this.iloscUlepszen);
            this.menu.deleteMenu();
            this.menu.deleteShop();
        }
    }else{
        this.menu.ChooseingMenu()
        let adddmg=document.getElementById("adddmg");
        adddmg.addEventListener("click",()=>{
            Object.values(this.map.persons).forEach(ob => {
            this.iloscUlepszen++;
            console.log("added gmg");
            ob.dmg++;
            
            })
            this.ChooseingWeapon=true;
            this.menu.deleteMenu();
            step();
            
        })
        
        
    }
        }
    
        step();
        
  
    
}
    
   

    init(){
        this.map = new OverworldMap(window.OverworldMaps.FLOOR1);
        //chodzenie postacia
        this.menu.ShopMenu();
   
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