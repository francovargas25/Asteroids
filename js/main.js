function gameOver(){
    stop();
    ctx.font = "80px space_theme"
    ctx.strokeStyle = "red"
    ctx.lineWidth = 8;
    ctx.strokeText("Spaceship Colission", 100,230)
    ctx.fillText("Press R to Reload",50,400)
}

function gameOver2(){
    stop();
    ctx.font = "100px space_theme"
    ctx.strokeStyle = "orange"
    ctx.lineWidth = 8;
    ctx.strokeText("Earth Exploded", 170,230)
    ctx.fillText("Press R to Reload",50,400)
}

function update(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    board.drawScore();
    spaceship.draw();
    drawShoots();
    generateAsteroides();
    frames+=2;
    drawAsteroides();
    checkCollition()
    collitionToEarth();
    arrAsteroides.forEach(function(asteroide,aindex){
        
    })
 }

 function update2(){   //este update se genera si quieren jugar dos
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    board.drawScore();
    spaceship.draw();
    spaceship2.draw();
    drawShoots();
    generateAsteroides();
    frames+=20;
    drawAsteroides();
    checkCollition();
    checkCollition2()
    collitionToEarth();
    arrAsteroides.forEach(function(asteroide,aindex){
        
    })
 }

 function start(){
     board.music.play();
     if(intervalo > 0)return;
     intervalo = setInterval(function(){
        update();
    }, 1000/60);
    shoots = [];
    frames=0;
 }

 function start2(){ //funcion para probar si salen dos jugadores
    board.music.play();
    if(intervalo > 0)return;
    intervalo = setInterval(function(){
       update2();
   }, 1000/60);
   shoots = [];
   frames=0;
 }

 function stop(){
    board.music.pause();
    clearInterval(intervalo);
    intervalo = 0;
 }

 function checkCollition(){
     arrAsteroides.forEach(function(asteroide,aindex){
         if(spaceship.isTouching(asteroide)){ //spaceship es un var en declarations de new Spaceship
             gameOver();
             arrAsteroides.splice(aindex,1);
         }   
         shoots.forEach(function(shoot,sindex){
            if(asteroide.isTouching2(shoot)){
                arrAsteroides.splice(aindex,1);
                shoots.splice(sindex,1);
                score++; //cada que se elimine un asteroide el score incrementa 1
                console.log(score);
            }
        })
         }
     );
}

function collitionToEarth(){
    arrAsteroides.forEach(function(asteroide){
        if(asteroide.y>canvas.height)gameOver2();//el juego debe parar cuando un asteroide llegue abajo del canvas
    })
    
}

function checkCollition2(){
    arrAsteroides.forEach(function(asteroide,aindex){
        if(spaceship2.isTouching(asteroide)){ //spaceship es un var en declarations de new Spaceship
             gameOver();
            arrAsteroides.splice(aindex,1);
        }   
    }
    );
} // colission nave del segundo jugador