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
        if(this.player1Points >= 4 || this.player2Points >= 4){
            let diff = this.player1Points - this.player2Points;
            if(diff >=2) return "Game for Player 1";
            if(diff <=-2) return "Game for Player 2";
            if(diff ==1) return "Advantage for Player 1";
            if(diff ==-1) return "Advantage for Player 2";
            return "Deuce";
        }

        if(this.player1Points == 3 && this.player2Points == 3) return "Deuce";

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