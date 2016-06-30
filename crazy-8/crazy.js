console.log('crazy.js loaded');

var Game = {
  ph: document.querySelector('#p-side'),
  dh: document.querySelector('#d-side'),
  onTop: document.querySelector('#current-card'),
  faceD: document.querySelector('#face-down'),
  dispTurn: document.querySelector('#turn'),


  currentRank: null,
  currentSuit: null,
  participants: ['Player', 'Dealer'],
  turn: 'Player',
  blueHand: [],
  playerHandStr: '',
  redHand: [],
  dealerHandStr: '',
  shuffledDeck: [],
  discardPile: [],
  topCard: [],

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
  fisherYates: function(cardsArr) {
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
  dealCard: function(array) {
    var card = array.pop();
    return card;
  },
  startGame: function(){
    this.shuffledDeck = this.fisherYates(this.createDeck()); // shuffle cards

    for (var i=0; i<8; i++) { // deal cards and display
      this.blueHand.push(this.dealCard(this.shuffledDeck));
      this.redHand.push(this.dealCard(this.shuffledDeck));
    }

    for (var i=0; i<this.ph.children.length; i++) { // add to DOM
      this.ph.children[i].innerText = this.blueHand[i].rank + this.blueHand[i].suit;
      this.dh.children[i].innerText = this.redHand[i].rank + this.redHand[i].suit;
    }

    this.topCard.push(this.dealCard(this.shuffledDeck)); // deal a card into topCard array
    this.onTop.innerText = this.topCard[0].rank + this.topCard[0].suit; // add to DOM

    this.dispTurn.innerText = `${this.turn}, it\'s your turn!`
    this.gamePlay(this.turn);
  },
  endGame: function(winner) {
    alert(`${winner} has won!`);
  },
  setCurrent: function(override, chosenSuit) { // call after every play
    if (override) {
      this.currentRank = this.topCard[0].rank;
      this.currentSuit = chosenSuit;
    } else {
      this.currentRank = this.topCard[0].rank;
      this.currentSuit = this.topCard[0].suit;
    }

  },
  gamePlay: function(turn) {
    console.log(`playerHand: ${this.playerHand.length}, dealerHand: ${this.dealerHand.length}, shuffledDeck: ${this.shuffledDeck.length} `);

    this.faceD.addEventListener('click', function(){
      this.turn === 'Player' ? this.dealCard(this.playerHand) : this.dealCard(this.dealerHand);
    })

    // also add event listeners for cards in player/dealer hands and shift them as necessary
    // probably need one for each card
    this.ph1.addEventListener('click', function(){
      // remove that card from hand
      // add to discard pile
      // hide the card background
    })

    if (this.turn === 'Player') {
      var removed = this.playerHand.splice(i, 1);
      this.shuffledDeck.unshift(removed[0]);
     // remove from hand, add to top of shuffled deck
    } else {
      var removed = this.dealerHand.splice(i, 1);
      this.shuffledDeck.unshift(removed[0]);
      // remove from hand, add to top of shuffled deck
    }

    this.setCurrent(false);

    if (this.currentRank == 8) {
      this.setCurrent(true, prompt('What suit do you want (c/d/h/s)?').toUpperCase());
    }

    console.log(`cards in player hand: ${this.playerHand.length}, cards in dealer hand: ${this.dealerHand.length}`);
    console.log(`[${this.currentRank}${this.currentSuit}] is on top.`);
    if (this.playerHand.length > 0 && this.dealerHand.length > 0) { // play
      this.altTurn(this.participants); // switch turns
      console.log(this.turn + ', it\'s your turn!');

      this.render(this.turn);
      this.gamePlay(this.turn); // recursive call
    } else {
      this.endGame(this.turn);
    }
  }
} // end of Game object

var btn = document.querySelector('#deal');
btn.addEventListener('click', function(){
  Game.startGame();
});
