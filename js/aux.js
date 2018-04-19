//crear funcion nde generate asteroids
//var random x
//var random y
    //var image = asteroidotes(math.floor(math.random()*asteroidotes.lenght));
//dentro de esta funcion se debe crear una funcion que pushee el objeto generado dentro del arreglo arrAsteroidotes

//GENERAR ASTEROIDES
function generateAsteroides() {
    if (!(frames % 150 === 0)) return; //frecuencia con la que aparecen los asteroides
    var randomX = Math.floor(Math.random() * 200) + 300;
    var randomY = Math.floor(Math.random() * 200) - 300;
    var image = asteroides[Math.floor(Math.random() * asteroides.length)];
    var width = image === "assets/asteroid1.png" ? 60 : image === "assets/Asteroid2.png" ? 80 : image === "assets/asteroid3.png"  ? 120:120;

    asteroide = new Asteroides(randomX, randomY, width, image);
    arrAsteroides.push(asteroide);
}

function drawAsteroides() {
    arrAsteroides.forEach(function(asteroide) {
        if (frames%50 === 0){
            asteroide.direction = (Math.floor(Math.random()*3)-1)
        }
        asteroide.draw();
    });
}// fin de generacion de asteroides

function generateShoots(){
    var shoot= new Shoot(spaceship.x + 35, spaceship.y);
    shoots.push(shoot);
}

function drawShoots(){
    shoots.forEach(function(shoot){
        shoot.draw();
    });
} 

//gameover



//validación de choque de la nave con asteroides
function checkCollition(){
    asteroides.forEach(function(asteroides){ //se crea un metopdo donde se evalua/toma pip
        if(spaceship.isTouching(asteroides)) gameOver();
    });
}

function checkCollition2(){
    shoots.forEach(function(asteroides){ 
        if(shoot.isTouching(asteroides)) gameOver();
    });
}
