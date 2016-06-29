// document.addEventListener('DOMContentLoaded', function(){
  console.log('crazy.js loaded');

  var Game = {
    currentRank: null,
    currentSuit: null,
    participants: ['Player', 'Dealer'],
    turn: 'Player',
    deck: [],
    deltCards: [],
    playerHand: [],
    playerHandStr: '',
    dealerHand: [],
    shuffledDeck: [],
    createDeck: function(){
      var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      var suits = ["C", "D", "H", "S"];
      var deck = [];

      for (var r=0; r<ranks.length; r++){ // runs 13 times
        for (var s=0; s<suits.length; s++){ // runs 4 times
          var pair = {rank: ranks[r], suit: suits[s]};
          this.deck.push(pair);
        }
      }

      // for(i=0; i<52; i++){
      //   console.log(this.deck[i]);
      // }

      return this.deck;
    },
    altTurn: function(array){
      array.push(array.shift());
      this.turn = array[0];
    },
    fisherYates: function (cardsArr) {
      var i = cardsArr.length;
      if ( i === 0 ) return false;
      while ( --i ) {
         var j = Math.floor( Math.random() * ( i + 1 ) );
         var tempi = cardsArr[i];
         var tempj = cardsArr[j];
         cardsArr[i] = tempj;
         cardsArr[j] = tempi;
       }
       return cardsArr;
    },
    startGame: function(){
      console.log('playing crazy 8\'s!');
      console.log('creating a deck...');
      this.createDeck();
      // console.log('number cards in deck: ' + this.deck.length);
      this.shuffledDeck = this.fisherYates(this.deck); // shuffle all cards
      // for (i=0; i<52; i++){
      //   console.log(shuffledDeck[i]);
      // }

      var playerArr = this.shuffledDeck.splice(0, 8); // deal hands
      var dealerArr = this.shuffledDeck.splice(8, 8);
      for (i=0; i<8; i++) {
        this.playerHand.push(playerArr[i]);
        this.dealerHand.push(dealerArr[i]);
      }

      console.log(`playerHand: ${this.playerHand.length}, dealerHand: ${this.dealerHand.length}, shuffledDeck: ${this.shuffledDeck.length}`);

      console.log(this.turn + ', it\'s your turn!');
      this.gamePlay(this.participants);
    },
    render: function(){ // converts array to string
      for (i=0; i<this.playerHand.length; i++) {
        this.playerHandStr += `[${this.playerHand[i].rank}${this.playerHand[i].suit}]  `
      }
      return this.playerHandString;
    },
    gamePlay: function(participantsArr) {
      this.currentRank = this.shuffledDeck[0].rank;
      this.currentSuit = this.shuffledDeck[0].suit;
      this.render();
      console.log(`[${this.currentRank}${this.currentSuit}] is on top.`);
      var playerAction = prompt(`Your current hand: ${this.playerHandStr}. What card do you want to play?`);
      console.log(`Player chose [${playerAction}]`);

      // check if player choice is valid
      // if so, remove from hand
      // add to pile
      // change current card
      //




      this.altTurn(this.participants); // switch turns
      console.log(this.turn + ', it\'s your turn!')
    }
  }

  console.log("type Game.startGame(); to begin playing");















// });













// });
