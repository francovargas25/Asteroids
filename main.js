var canvas = document.getElementById('mainGame')
var ctx = canvas.getContext('2d')
//___________________________________
//classes

//SPACE BOARD class
function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height= canvas.height;
    this.img = new Image();
    this.img.src = "assets/space.jpg";
    this.music = new Audio();
    this.music.src = "" //aqui se inserta el link o la fuente del audio, es una propiedad el board
    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function (){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);//esto es asi porque si cambia algo, no hace falta que se cambie en el dibujo
    };

    } //END OF BOARD CLASS, queda pendiente agregar la musica



//SPACESHIP class_____________________________
    function Spaceship(){
        this.x = 550;
        this.y= 450;
        this.width = 100;
        this.height= 100;
        this.img = new Image();
        this.img.src= "assets/spaceship.png"

    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }


    //movimiento de la nave, crear add event listener para cada movimiento
    this.moveUp = function(){
        this.y-=20;
    }
    this.moveDown = function(){
        this.y+=20;
    }
    this.moveLeft = function(){
        this.x-=20;
    }
    this.moveRight = function(){
        this.x+=20;
    }
    //this.isTouching=function(// crear variable donde esten todos los asteorides o nave enemiga)

    this.isTouching = function(asteroids){ //SACAR EJEMPLO DE BOUNCEBALLS by hbliss
        return (this.x < asteroids.x + asteroids.width)&&
                (this.x + this.width > asteroids.x) &&
                (this.y < asteroids.y + asteroids.height) &&
                (this.y + this.height > asteroids.y);
    };
            
        } //END OF SPACESHIP CLASS  __________________


//SHOOT CLASS
function Shoot(x,y){
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.move = false;
    this.img = new Image();
    this.img.src = "assets/laser.png" 
        this.img.onload = function(){
            this.draw();
            }.bind(this);

    this.draw = function(){
        if(this.move) this.x +=10;
        ctx.drawImage(this.img,this.x + 55, this.y + 5,this.width,this.height);
    }
    this.moveUp=function(){
        if(!this.move) this.y -=20;
    }
    this.moveDown = function(){
        if(!this.move) this.y +=20;
    }
    this.moveLeft = function(){
        this.x -= 10;
    }
    this.moveRight = function(){
        this.x += 10;
    }



}






//asteroid 1 class
function Asteroid1(){

}


//asteroid 2 class
function Asteroid2(){

}

//asteroid 3 class

//evil spaceship class


//DECLARACIONES
var board = new Board();
var spaceship = new Spaceship();
var shoot = new Shoot();
var intervalo;
//var asteroid = new Asteroid();
var frames = 0;


//MAIN FUCTIONS, tiene que haber un update, start y stop

function update(){
    console.log('running')
    board.draw();
    spaceship.draw();
    shoot.draw();
    
    
 }

 function start(){
     intervalo = setInterval(function(){
        update();
    }, 1000/60);
 }

 function stop(){
    board.music.pause();
    clearInterval(intervalo);
    intervalo = 0;
    
 }

 function rotateRight(){
     spaceship.rotate(10*Math.PI/180);
 }
 



 //listeners, botton de start, de pausa, keydowns para moverse (spaceship.move) sobre el canvas, keydown para disparar
 document.getElementById('startButton').addEventListener('click',function(){
     start();
 });
            //movimiento del spaceship
 addEventListener('keydown',function(e){
     if(e.keyCode === 39){
         spaceship.moveRight();
         shoot.moveRight();
     }
 })
 addEventListener('keydown',function(e){
    if(e.keyCode === 37){
        spaceship.moveLeft();
        shoot.moveLeft();
    }
})
addEventListener('keydown',function(e){
    if(e.keyCode === 38){
        spaceship.moveUp();
        shoot.moveUp();
    }
})
addEventListener('keydown',function(e){
    if(e.keyCode === 40){
        spaceship.moveDown();
        shoot.moveDown();
    }
})

            //creación de disparos
addEventListener('keydown',function(e){
    if(e.keyCode === 32){
        shoot.draw();
    }
})


 //FUNCIONES AUXILIARES