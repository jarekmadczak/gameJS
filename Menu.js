class menu {
AfterDeathMenu(ctx,canvas,wrogowie,ulepszenia){
    ctx.font = "50px Arial";
    ctx.fillText("Game over",  canvas.width/3, canvas.height/4);
    ctx.fillText("pokonani wrogowie: "+wrogowie,  canvas.width/3-100, canvas.height/4+100);
    ctx.fillText("zebrane ulepszenia: "+ ulepszenia,  canvas.width/3-100, canvas.height/4+200);
}
ChooseingMenu(){
    var div = document.createElement("div");
    div.id="choose";
    div.style.width = "25%";
    div.style.float = "right";
    div.style.textAlign="center"
    div.style.color = "white";
    div.style.marginBottom = "300px";
    div.innerHTML =("<a>menu wyboru iemow:<a>"+"<br>"+"<button id='aszyb'>szybksoc ataku</button>"
    +"<br>"+
    "<button id='dl'>dokup Długosc</button>" +"<br>"+
    "<button id='szyb'>dokup szybkosc</button>" +"<br>"+
    "<button id='adddmg'>dokup DMG</button>"
    
    );
    
    document.body.appendChild(div);
}
deleteMenu(){
    var div = document.getElementById("choose");
    div.remove();
}
deleteShop(){
    var div = document.getElementById("shop");
    div.remove();
}
ShopMenu(){
    var div = document.createElement("div");
    div.id="shop";
    div.style.width = "25%";
    div.style.textAlign="center"
    div.style.float = "left";
    div.style.color = "white";
    div.innerHTML =("<d>SKLEP</d>"+"<br>"+
    "<button id='hp'>dokup HP</button>"
    +"<br>"+
    "<button id='dl'>dokup Długosc</button>" +"<br>"+
    "<button id='szyb'>dokup szybkosc</button>" +"<br>"+
    "<button id='dmg'>dokup DMG</button>"
    );
   
    document.body.appendChild(div);
}

}