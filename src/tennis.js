class Tennis {
    constructor() {
        this.player1Points = 0;
        this.player2Points = 0;
    }

    getScoreText(points) {
        if(points == 0) return "Love";
        if(points == 1) return "15";
        if(points == 2) return "30";
        if(points == 3) return "40";
    }

    score(){
        if(this.player1Points == 4){
            return "Game for player 1";
        }

        if(this.player2Points == 4){
            return "Game for Player 2";
        }

        let player1Score = "Love";
        let player2Score = "Love";

        return this.getScoreText(this.player1Points) + 
           " - " + 
           this.getScoreText(this.player2Points);
    }

    player1Scores(){
        this.player1Points++;
    }

    player2Scores(){
        this.player2Points++;
    }
}

export default Tennis;