//SPACE BOARD
function Board(){

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

    } //END OF BOARD CLASS, queda pendiente agregar la musica


//SPACESHIP 
    function Spaceship(){
        this.x = 550;
        this.y= 450;
        this.width = 100;
        this.height= 100;
        this.speed = 20;
        this.img = new Image();
        this.img.src= "assets/spaceship.png"

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
    this.isTouching = function(asteroid1){ 
        return (this.x < asteroid1.x + asteroid1.width)&&
                (this.x + this.width > asteroid1.x) &&
                (this.y < asteroid1.y + asteroid1.height) &&
                (this.y + this.height > asteroid1.y);

   
        } 
    }//END OF SPACESHIP CLASS  __________________

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

//asteroid 1 class
function Asteroid1 (x,y) {
    this.x = x;
    this.y = y; 
    this.width = 70;
    this.height = 70;
    this.angle = Math.PI / 360;
    this.speed = 50;
    this.img = new Image;
    this.img.src = "assets/asteroid1.png";
    this.speed = 1;

    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        ctx.fillStyle = "white";
        ctx.save();
        ctx.rotate(this.speed*this.angle);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        //ctx.translate(this,x,this.y);
        ctx.restore()
        this.speed += 1;
    }

    this.update = function() {
     
    }
    this.newPos = function() {
        this.angle += 1 * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}

//asteroid 2 class
function Asteroid2 () {
    this.x = 400;
    this.y = 400; 
    this.width = 90;
    this.height = 90;
    this.angle = 0;
    this.speed = 3;
    this.img = new Image;
    this.img.src = "assets/Asteroid2.png";

    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    this.update = function() {
        ctx.save();
        ctx.translate(this.x, this.y); 
        ctx.rotate(this.angle);
        ctx.restore(); 
    }
    this.newPos = function() {
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}

//asteroid 3 class
function Asteroid3 () {
    this.x = 700;
    this.y = 200; 
    this.width = 110;
    this.height = 110;
    this.angle = 0;
    this.speed = 4;
    this.img = new Image;
    this.img.src = "assets/asteroid3.png";

    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    this.update = function() {
        ctx.save();
        ctx.translate(this.x, this.y); 
        ctx.rotate(this.angle);
        ctx.restore(); 
    }
    this.newPos = function() {
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}