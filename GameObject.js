class GameObject {
    constructor(config) {
      this.x = config.x || 0;
      this.y = config.y || 0;
      this.wycinek = config.wycinek || 64
      this.direction= config.direction || "down";
      this.sprite = new Sprite({
        gameObject: this,
        src: config.src || "/images/characters/people/hero.png"
      });
      
    }

    update(){
        
      }
  }