function gameOver(){
    stop();
    ctx.font = "100px courier"
    ctx.strokeStyle = "red"
    ctx.lineWidth = 8;
    ctx.strokeText("You Are Dead", 100,210)
    ctx.fillText("press R to start",50,300)
}

function update(){
    //generateAsteroidotes();
    board.draw();

    //asteroid1.newPos();

    asteroid2.draw();
    asteroid3.draw();
    spaceship.draw();
    asteroid1.draw();
    drawShoots();
    //drawAsteroidotes();
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

