
var canvas = document.getElementById('mainGame')
var ctx = canvas.getContext('2d')

var board= new Board();
var asteroides = ["assets/asteroid1.png","assets/Asteroid2.png","assets/asteroid3.png"];
var spaceship = new Spaceship();
var spaceship2 = new Spaceship2(); //nave de jugador 2
var shoots = [];
var intervalo;
var arrAsteroides = [];
var score = 0;