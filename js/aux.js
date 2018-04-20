
//GENERAR ASTEROIDES
function generateAsteroides() {
    if (!(frames % 150 === 0)) return; //frecuencia con la que aparecen los asteroides
    var randomX = Math.floor(Math.random() * 200) + 300;
    var randomY = Math.floor(Math.random() * 200) - 100;
    var image = asteroides[Math.floor(Math.random() * asteroides.length)];
    var width = image === "assets/asteroid1.png" ? 60 : image === "assets/Asteroid2.png" ? 80 : image === "assets/asteroid3.png"  ? 120:120;

    asteroide = new Asteroides(randomX, randomY, width, image);
    arrAsteroides.push(asteroide);
}

function drawAsteroides() {
    arrAsteroides.forEach(function(asteroide) {
        if (frames%150 === 0){
            asteroide.direction = (Math.floor(Math.random()*3)-1)
        }
        asteroide.draw();
    });
}// fin de generacion de asteroides



//GENERAR DISPAROS LASER DEL SPACESHIP
function generateShoots(){
    var shoot= new Shoot(spaceship.x + 35, spaceship.y);
    shoots.push(shoot);
}

//GENERAR DISPAROS LASER DEL SPACESHIP2
function generateShoots2(){
    var shoot= new Shoot(spaceship2.x + 35, spaceship.y);
    shoots.push(shoot);
}



function drawShoots(){
    shoots.forEach(function(shoot){
        shoot.draw();
    });
} 

//gameover
