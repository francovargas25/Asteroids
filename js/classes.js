//SPACE BOARD
function Board(){

    score = 0;
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height= canvas.height;
    this.img = new Image();
    this.img.src = "assets/space.jpg";
    this.music = new Audio();
    this.music.src = "assets/galacticsound.mp3"
    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function (){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
    this.drawScore = function(){
        ctx.font = "50px Sans-serif"
        ctx.fillStyle = "purple"
        ctx.fillText("Destroyed:  " + score,50,100);
    }

} //END OF BOARD CLASS, queda pendiente agregar la musica


//SPACESHIP 
    function Spaceship(){
        this.x = 550;
        this.y= 650;
        this.width = 100;
        this.height= 100;
        this.speed = 20;
        this.velY = 0;
        this.velX = 0;
        this.speed = 5;
        this.friction = 0.8;
        this.img = new Image();
        this.img.src= "assets/spaceship.png"
        this.keys=[]

    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }


    //movimiento de la nave, checar listeners
    this.moveUp = function(){
        this.y-=30;
    }
    this.moveDown = function(){
        this.y+=30;
    }
    this.moveLeft = function(){
        this.x-=30;
    }
    this.moveRight = function(){
        this.x+=30;
    }

    this.isTouching = function(Asteroides){ 
        return (this.x < Asteroides.x + Asteroides.width)&&
                (this.x + this.width > Asteroides.x) &&
                (this.y < Asteroides.y + Asteroides.height) &&
                (this.y + this.height > Asteroides.y);

   
        } 
    }//END OF SPACESHIP CLASS  __________________

/*SPACESHIP2 
function Spaceship2(){
    this.x = 550;
    this.y= 650;
    this.width = 100;
    this.height= 100;
    this.speed = 20;
    this.velY = 0;
    this.velX = 0;
    this.speed = 5;
    this.friction = 0.8;
    this.img = new Image();
    this.img.src= "assets/evilspaceship.png"
    this.keys=[]

this.img.onload = function(){
    this.draw();
}.bind(this);
this.draw = function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}


//movimiento de la nave, checar listeners
this.moveUp = function(){
    this.y-=30;
}
this.moveDown = function(){
    this.y+=30;
}
this.moveLeft = function(){
    this.x-=30;
}
this.moveRight = function(){
    this.x+=30;
}

this.isTouching = function(Asteroides){ 
    return (this.x < Asteroides.x + Asteroides.width)&&
            (this.x + this.width > Asteroides.x) &&
            (this.y < Asteroides.y + Asteroides.height) &&
            (this.y + this.height > Asteroides.y);


    } 
}//END OF SPACESHIP2
 CLASS  __________________*/


//SHOOT CLASS__________
function Shoot(x,y){
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.img = new Image();
    this.img.src = "assets/laser.png" 
        this.img.onload = function(){
            this.draw();
            }.bind(this);
        
          

    this.draw = function(){
        this.y -= 10
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    
}

//END OF SHOOT CLASS

//asteroides
   function Asteroides(x,y,width,image){
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = width;
    this.direction = 0;
    this.img = new Image();
    this.img.src = image;
    this.draw = function(){
        this.y++;
        this.x+=5*this.direction
        ctx.drawImage(this.img, this.x, this.y, this.width,this.height);
    }
    this.isTouching2= function(Asteroides){ 
        return (this.x < Asteroides.x + Asteroides.width)&&
                (this.x + this.width > Asteroides.x) &&
                (this.y < Asteroides.y + Asteroides.height) &&
                (this.y + this.height > Asteroides.y);
        }  
}