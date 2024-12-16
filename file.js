class Unit {
    constructor() {
      this.unit=[];
      this.ranks=[
        "ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "jack",
        "queen",
        "king"
      ];
      this.suits=["heart","Diamonds","Speeds","master"];
 
    }
    // method for unit .iterate over the arrays
 createUnit(){
    for(let i =0 ;i <this.suits.length;i++)
        for(let k =0;k < this.ranks.length;k++){
    let card ={
        name:`${this.ranks[k]} of ${this.suits[i]}`,
        value: k+1
    }
    this.unit.push(card)
    console.log(card);
    }
}
// start from the last element and swap 
    // one by one
    suffleUnit() {
        for (let i = this.unit.length - 1; i > 0; i--)
            {
             
                let k = Math.floor(Math.random() * (i + 1)); 
        [this.unit[i], this.unit[k]] = [this.unit[k], this.unit[i]];
            } 
        
     }
    }

//  calss for the game
// the play logic
// 2 players
class Game {
    constructor(){
        this.player1={
            name:"player1",
            score:0,
            hand:[]
        }
        this.player2={
            name:"player2",
            score:0,
            hand:[]
        }
    }
    // method to play the game 

    playGame(){
        // instiate a new unit,create a unit.then shuffle the unit
        const unit = new Unit
        unit.createUnit();
        unit.suffleUnit();
        while (unit.unit.length!==0){
            this.player1.hand.push(unit.unit.shift());
            this.player2.hand.push(unit.unit.shift());
        }
        console.log(this.player1.hand);

    // how many turns ther playing
    for(let i =0;i < this.player1.hand.length;i++){
        if(this.player1.hand[i].value > this.player2.hand[i].value){
            this.player1.score ++
            console.log(`
                p1 card:${this.player1.hand[i].name}
                p2 card: ${this.player2.hand[i].name}
                player 1 wins a point!
                                current score :p1:${this.player1.score}, p2 :${this.player2.score}
                `)
        }else if(this.player2.hand[i].value> this.player1.hand[1].value){
            this.player2.score ++
            console.log(`
                p2:card:${this.player2.hand[i].name}
                p1: card: ${this.player1.hand[i].name}
                player 2 wins a point !
                               current score :p2:${this.player2.score}, p1 :${this.player1.score}
                `)
        }else if(this.player1.hand[i].value= this.player2.hand[i].value){
                this.player1.score
                console.log(`
                p1 :card:${this.player1.hand[i].name}
                p2 : card : ${this.player2.hand[i].name}
                both of you  are a tie !
                                current score :p2:${this.player2.score}, p1 :${this.player1.score}

                
                `)
                }
                if(this.player1.score > this.player2.score){
                    console.log(`player 1 is the winner`);
                }else if(this.player2.score> this.player1.score){
                    console.log(` the player 2 is the winner`);
                }else {
                    console.log('No winner this turn');
                }
    }
    

    }

}


const game = new Game
game.playGame();

