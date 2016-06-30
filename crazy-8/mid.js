// document.addEventListener('DOMContentLoaded', function(){
  console.log('crazy.js loaded');

  var Game = {
    currentRank: null,
    currentSuit: null,
    participants: ['Player', 'Dealer'],
    turn: 'Player',
    playerHand: [],
    playerHandStr: '',
    dealerHand: [],
    dealerHandStr: '',
    shuffledDeck: [],
    createDeck: function(){
      var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      var suits = ["C", "D", "H", "S"];
      var deck = [];

      for (var r=0; r<ranks.length; r++){ // runs 13 times
        for (var s=0; s<suits.length; s++){ // runs 4 times
          var pair = {rank: ranks[r], suit: suits[s]};
          deck.push(pair);
        }
      }
      return deck;
    },
    altTurn: function(array){
      array.push(array.shift());
      this.turn = array[0];
      return this.turn
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
      this.shuffledDeck = this.fisherYates(this.createDeck()); // shuffle all cards

      // for (i=0; i<52; i++){
      //   console.log(this.shuffledDeck[i]);
      // }

      this.playerHand = this.shuffledDeck.splice(0, 8); // deal hands
      this.dealerHand = this.shuffledDeck.splice(8, 8); // deal hands

      // console.log(`playerHand: ${this.playerHand.length}, dealerHand: ${this.dealerHand.length}, shuffledDeck: ${this.shuffledDeck.length}`);

      console.log(this.turn + ', it\'s your turn!');
      this.gamePlay(this.turn);
    },
    setCurrent: function(override, chosenSuit) { // call after every play
      if (override) {
        this.currentRank = this.shuffledDeck[0].rank;
        this.currentSuit = chosenSuit;
      } else {
        this.currentRank = this.shuffledDeck[0].rank;
        this.currentSuit = this.shuffledDeck[0].suit;
      }
    },
    render: function(turn) {
      if (turn === 'Player') {
        for (i=0; i<this.playerHand.length; i++) {
          this.playerHandStr += `[${this.playerHand[i].rank}${this.playerHand[i].suit}]  `
        }
      } else {
        for (i=0; i<this.dealerHand.length; i++) {
          this.dealerHandStr += `[${this.dealerHand[i].rank}${this.dealerHand[i].suit}]  `
        }
      }
      console.log(`[${this.currentRank}${this.currentSuit}] is on top.`);
    },
    gamePlay: function(turn) {
      this.setCurrent(false);
      this.render(this.turn);

      if (turn === 'Player') {
        var i = prompt(`Your current hand: ${this.playerHandStr}. What index card do you want to play?`).toLowerCase();
        console.log(`Player chose [${i}]`);
      } else {
        var i = prompt(`Your current hand: ${this.dealerHandStr}. What index card do you want to play?`).toLowerCase();
        console.log(`Dealer chose [${i}]`);
      }

      var removed = this.playerHand.splice(i, 1);
      this.shuffledDeck.unshift(removed[0]);
       // remove from hand, add to top of shuffled deck

      this.setCurrent(false);

      if (this.currentRank == 8) {
        this.setCurrent(true, prompt('What suit do you want (c/d/h/s)?').toUpperCase());
      }
      console.log('currentRank: ' + this.currentRank + ' currentSuit: ' + this.currentSuit);

      this.altTurn(this.participants); // switch turns
      console.log(this.turn + ', it\'s your turn!')
      this.render(this.turn);







    }




  }

  console.log("type Game.startGame(); to begin playing");







// });







// });
