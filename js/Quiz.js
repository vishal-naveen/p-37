class Quiz {
  constructor(){}

  getState(){
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      fill("Blue")
      textSize(20);
      text("NOTE: Contestant who anserwed correctly will be highlighted green",130,230)
      fill("Black")
      text("Result of the QUIZ", 320, 50)

      for(var plr in allContestants){
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer){
          fill("Green")
        }
        else{
          fill("red") 
          
        }
        if(correctAns != allContestants[plr].answer){
          textSize(30)
          fill("red");
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 400, 300)
        }
        if(correctAns === allContestants[plr].answer){
          textSize(30)
          fill("green");
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 300, 300)
        }
      }
      
    }
    //write code to add a note here
    
    //write code to highlight contest who answered correctly
    
  }

}
