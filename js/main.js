function gameOver(){
    stop();
    ctx.font = "100px courier"
    ctx.strokeStyle = "red"
    ctx.lineWidth = 8;
    ctx.strokeText("You Are Dead", 100,210)
    ctx.fillText("press R to start",50,300)
}

function update(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    spaceship.draw();
    drawShoots();
    generateAsteroides();
    frames++;
    drawAsteroides();
    checkCollition();
    checkCollition2();
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

 function stop(){
    board.music.pause();
    clearInterval(intervalo);
    intervalo = 0;
 }

 function checkCollition(){
     arrAsteroides.forEach(function(asteroide,aindex){
         if(spaceship.isTouching(asteroide)){
             gameOver();
             arrAsteroides.splice(aindex,1);
         }   
         }
     );
     }

     function checkCollition2(){
        arrAsteroides.forEach(function(asteroide,aindex){
            if(shoot.isTouching(asteroide)){
                gameOver(); 
                arrAsteroides.splice(bindex,1);
            }   
            }
        );
        }