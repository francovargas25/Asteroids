document.getElementById('startButton').addEventListener('click',function(){
    start();
});
document.getElementById('pauseButton').addEventListener("click",function(){
    stop()
});

              //movimiento del spaceship
addEventListener('keydown',function(e){
    if(e.keyCode === 39){
        spaceship.moveRight();
        
    }
})
addEventListener('keydown',function(e){
   if(e.keyCode === 37){
       spaceship.moveLeft();
       
   }
})
addEventListener('keydown',function(e){
   if(e.keyCode === 38){
       spaceship.moveUp();
       
   }
})
addEventListener('keydown',function(e){
   if(e.keyCode === 40){
       spaceship.moveDown();
       
   }
})
  //fin movimiento del Spaceship



           //creación de disparos
addEventListener('keydown',function(e){
   if(e.keyCode === 32){
       generateShoots()
   }
})
            //fin de la creacion de disparos