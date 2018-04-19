//crear funcion nde generate asteroids
//var random x
//var random y
    //var image = asteroidotes(math.floor(math.random()*asteroidotes.lenght));
//dentro de esta funcion se debe crear una funcion que pushee el objeto generado dentro del arreglo arrAsteroidotes


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
    asteroid1.forEach(function(asteroid1){ //se crea un metopdo donde se evalua/toma pipe
        var res= spaceshipt.isTouching(asteroid1);
        if(res) gameOver();
    });
}

