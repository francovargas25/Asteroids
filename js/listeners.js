document.getElementById('startButton').addEventListener('click',function(){
    start();
}),
document.getElementById('pauseButton').addEventListener("click",function(){
    stop()
});
/*document.getElementById('startButton2').addEventListener('click',function(){
    start2();
}),*/






              //movimiento del spaceship
addEventListener('keydown',function(e){
    if(e.keyCode === 39){
        spaceship.moveRight();
        event.preventDefault();
        
    }
})
addEventListener('keydown',function(e){
   if(e.keyCode === 37){
       spaceship.moveLeft();
       event.preventDefault();
       
   }
})
addEventListener('keydown',function(e){
   if(e.keyCode === 38){
       spaceship.moveUp();
       event.preventDefault();
       
   }
})
addEventListener('keydown',function(e){
   if(e.keyCode === 40){
       spaceship.moveDown();
       event.preventDefault();
       
   }
})
  //fin movimiento del Spaceship









  //movimiento del spaceship2
addEventListener('keydown',function(e){
    if(e.keyCode === 68){
        spaceship2.moveRight();
        event.preventDefault();
        
    }
})
addEventListener('keydown',function(e){
   if(e.keyCode === 65){
       spaceship2.moveLeft();
       event.preventDefault();
       
   }
})
addEventListener('keydown',function(e){
   if(e.keyCode === 87){
       spaceship2.moveUp();
       event.preventDefault();
       
   }
})
addEventListener('keydown',function(e){
   if(e.keyCode === 83){
       spaceship2.moveDown();
       event.preventDefault();
       
   }
})
  //fin movimiento del Spaceship2








           //creación de disparos del spaceship
addEventListener('keydown',function(e){
   if(e.keyCode === 32){
       generateShoots()
       event.preventDefault();
   }
})
        /*creacion de disparos del spaceship 2
addEventListener('keydown',function(e){
    if(e.keyCode === 90){
        generateShoots()
        event.preventDefault();
    }
})*/

addEventListener('keydown',function(e){
    if(e.keyCode === 82){
        location.reload();
        event.preventDefault();
    }
 })


            //fin de la creacion de disparos