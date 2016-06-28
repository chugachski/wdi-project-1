// document.addEventListener('DOMContentLoaded', function(){
  console.log('crazy.js loaded');

  var Game = {
    currentRank: null,
    currentSuit: null,
    participants: ['player', 'dealer'],
    turn: 'player',
    deck: [],
    player: [],
    dealer: [],
    createDeck: function(){
      for (var r=0; r<13; r++) { // let r be card rank
        for (var s=0; s<4; s++) { // let s be card suit
          var pair = [r+1, s+1];
          this.deck.push(pair);
        }
      }
      return this.deck;
    },
    altTurn: function(array){
      array.push(array.shift());
      this.turn = array[0];
    },
    randCard: function(){
      return Math.floor(Math.random() * this.deck[]); // random int (0,51) or (0,52])

    },
    startGame: function(){
      console.log('playing crazy 8\'s!');
      console.log(this.turn + ', it\'s your turn!');
      this.gamePlay(this.participants);
    },
    gamePlay: function(array){
      this.createDeck(); // generate nested array

      this.altTurn(array);
      console.log(this.turn + ', it\'s your turn!')
    }
  }

  console.log("type Game.startGame(); to begin playing");















// });













// });
