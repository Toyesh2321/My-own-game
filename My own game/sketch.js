var canvas,backgroundImg

var gameSatae = 0;
var playerCount; 
var allPlayers;
var database;

var form, player, game;

var hero
var alien

function prelod(){
    hero = loadImage("../images/hero.png")
    alien = loadImage("../images/alien.png")
    space = loadImage("../images/space.png")
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }

  function draw(){
    if(playerCount === 2){
        game.update(1);
      }
  }