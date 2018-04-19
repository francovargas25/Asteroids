var canvas = document.getElementById('mainGame')
var ctx = canvas.getContext('2d')

var board= new Board();
var spaceship = new Spaceship();
var asteroid1 = new Asteroid1(50,50);
var asteroid2 = new Asteroid2();
var asteroid3 = new Asteroid3();
var shoots = [];
var intervalo;
var frames = 0

//array dionde se meten los objetos  var asteroidotes ["asteroide1.png", "ast2......"]

// array donde estan los nomnbres de los asteroides var arrAsteroidotes [vacio] aqui se iran guardando, fijate en ejemplo de shoots

//