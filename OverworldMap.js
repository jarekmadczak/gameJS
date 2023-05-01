class OverworldMap {
    constructor(config) {
      this.enemys = config.enemys;
      this.persons = config.persons;
      this. drawMap = new Image();
      this. drawMap.src = config.MapImage;
    }
   DrawMap(ctx,cameraperson) {
    ctx.drawImage(this.drawMap, -cameraperson.x, -cameraperson.y)
    }
}
  window.OverworldMaps = {
    FLOOR1: {
      MapImage: "images/floor1.png",
      enemys: {
        przeciwnik: new Enemy_Slime({
            x:10,
            y:9,
            src:"images/characters/slime.png",
            wycinek:32
          }),
          przeciwnika: new Enemy_Slime({
            x:133,
            y:90,
            src:"images/characters/slime.png",
            wycinek:32
          }),
      },
      persons: {
        hero: new Person({
          x:15*10,
          y:6*10,
          src:"images/characters/hero.png",
          wycinek:64
      }),
      },
      walls:{
        //"16,16":true
        ["16,16"]:true
      }
    },
    FLOOR2: {
    MapImage: "images/floor2.png",
      gameObjects: {
        hero: new Person({
          x:15*10,
          y:6*10,
          src:"images/characters/hero.png",
          wycinek:64
      }),
      npc1: new GameObject({
          x:7*10,
          y:3*10,
          src:"images/characters/slime.png",
          wycinek:32
      }),
      przeciwnik: new GameObject({
          x:10*10,
          y:9*10,
          src:"images/characters/slime.png",
          wycinek:32
        })
      }
    },
  }