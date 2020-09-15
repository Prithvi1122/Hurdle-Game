var canvas,database;

var gameState=0;
var playerCount;
var allPlayers;

var form,game,player;

var man,man1,man2,man3,man4;
function setup(){
    canvas=createCanvas(displayWidth - 20, displayHeight-30);
    database=firebase.database();
    game=new Game();
    game.getstate();
    game.start();
}
function draw(){
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }


}