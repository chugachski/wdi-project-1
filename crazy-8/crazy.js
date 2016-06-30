console.log('crazy.js loaded');

var Game = {
  rh: document.querySelector('#r-side'),
  bh: document.querySelector('#b-side'),
  onTop: document.querySelector('#current-card'),
  dispTurn: document.querySelector('#turn'),
  faceDn: document.querySelector('#face-down'),
  r1: document.querySelector('#r-1'),

  currentRank: null,
  currentSuit: null,
  participants: ['red', 'blue'],
  turn: 'red',
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
  startGame: function() { // preps the game board
    this.shuffledDeck = this.fisherYates(this.createDeck()); // shuffle cards

    for (var i=0; i<8; i++) { // deal cards and display
      this.blueHand.push(this.dealCard(this.shuffledDeck));
      this.redHand.push(this.dealCard(this.shuffledDeck));
    }
    console.log('redhand: ', this.redHand[0]);

    for (var i=0; i<8; i++) { // add to DOM
      this.rh.children[i].innerText = this.redHand[i].rank + this.redHand[i].suit;
      this.bh.children[i].innerText = this.blueHand[i].rank + this.blueHand[i].suit;
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
  drawCard: function(turn){
    this.faceDn.addEventListener('click', function() {
      if (turn === 'red') {
        console.log('clicked');
        this.redHand.push(this.dealCard(this.shuffledDeck));
      } else if (turn === 'blue') {
        this.blueHand.push(this.dealCard(this.shuffledDeck));
      }
    });
  },
  playCard: function() {
    this.r1.addEventListener('click', function(){
      console.log('r1 clicked');
      this.topCard.unshift(this.redHand.splice(0,1));
    })
  },
  gamePlay: function() {
    console.log(`redHand: ${this.redHand.length}, blueHand: ${this.blueHand.length}, shuffledDeck: ${this.shuffledDeck.length} turn: ${this.turn} `);

    this.playCard();

  }

} // end of Game object

var btn = document.querySelector('#deal');
btn.addEventListener('click', function(){
  Game.startGame();
});


