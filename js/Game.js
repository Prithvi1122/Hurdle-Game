class Game{
    constructor(){

    }

    getstate(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
    })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        man1=createSprite(100,150,30,30)
        man2=createSprite(100,200,30,30)
        man3=createSprite(100,250,30,30)
        man4=createSprite(100,300,30,30)

        man=[man1,man2,man3,man4]
    }

    play(){
        form.hide();

        Player.getPlayerInfo();

        if(allPlayers!==undefined){
                background("white")
            
            var index = 0;

            var x=0;
            var y=175;

            for(var plr in allPlayers){
                index=index+1

                y=y+200;

                x=displayWidth-allPlayers[plr.distance];
                man[index-1].x=x;
                man[index-1].y=y;
            

                if(index===player.index){
                    stroke(5);
                    fill("red");
                    ellipse(x,y,60,60);
                    man[index-1].shapeColor="red";
                    
                    camera.position.x=man[index-1].x
                    camera.position.y=displayHeight/2;


                }
            }    
        }

        drawSprites();


    }
}

