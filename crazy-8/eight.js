var btn = document.querySelector('#deal');

rh = document.querySelector('#r-side'),
bh = document.querySelector('#b-side'),
onTop = document.querySelector('#current-card'),
dispTurn = document.querySelector('#turn'),
faceDn = document.querySelector('#face-down'),
rh1 = document.querySelector('#r-1'),
rh2 = document.querySelector('#r-2'),
rh3 = document.querySelector('#r-3'),
rh4 = document.querySelector('#r-4'),
rh5 = document.querySelector('#r-5'),
rh6 = document.querySelector('#r-6'),
rh7 = document.querySelector('#r-7'),
rh8 = document.querySelector('#r-8'),
bh1 = document.querySelector('#b-1'),
bh2 = document.querySelector('#b-2'),
bh3 = document.querySelector('#b-3'),
bh4 = document.querySelector('#b-4'),
bh5 = document.querySelector('#b-5'),
bh6 = document.querySelector('#b-6'),
bh7 = document.querySelector('#b-7'),
bh8 = document.querySelector('#b-8'),

currentRank = null,
currentSuit = null,
participants = ['red', 'blue'],
turn = 'red',
blueHand = [],
redHand = [],
shuffledDeck = [],
discardPile = [],
topCard = [];

function createDeck() {
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
}

function fisherYates(cardsArr) {
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
}

function dealCard(array) {
    var card = array.pop();
    return card;
  }

function startGame() { // preps the game board
  shuffledDeck = fisherYates(createDeck()); // shuffle cards

  for (var i=0; i<8; i++) { // deal cards and display
    blueHand.push(dealCard(shuffledDeck));
    redHand.push(dealCard(shuffledDeck));
  }
  console.log('redhand: ', redHand);

  for (var i=0; i<8; i++) { // add to DOM
    rh.children[i].innerText = redHand[i].rank + redHand[i].suit;
    bh.children[i].innerText = blueHand[i].rank + blueHand[i].suit;
  }

  topCard.push(dealCard(shuffledDeck)); // deal a card into topCard array
  onTop.innerText = topCard[0].rank + topCard[0].suit; // add to DOM
  console.log('topCard: ', topCard);

  dispTurn.innerText = `${turn}, it\'s your turn!`
  gamePlay();
}

function gamePlay() {
  console.log(`redHand: ${redHand.length}, blueHand: ${blueHand.length}, shuffledDeck: ${shuffledDeck.length} turn: ${turn} `);

 // add event listeners to red cards
  rh1.addEventListener('click', function() {
    playCard(redHand, 0);
  })

  rh2.addEventListener('click', function() {
    playCard(redHand, 1);
  })

  rh3.addEventListener('click', function() {
    playCard(redHand, 2);
  })

  rh4.addEventListener('click', function() {
    playCard(redHand, 3);
  })

  rh5.addEventListener('click', function() {
    playCard(redHand, 4);
  })

  rh6.addEventListener('click', function() {
    playCard(redHand, 5);
  })

  rh7.addEventListener('click', function() {
    playCard(redHand, 6);
  })

  rh8.addEventListener('click', function() {
    playCard(redHand, 7);
  })

// add event listeners to blue cards
  bh1.addEventListener('click', function() {
    playCard(blueHand, 0);
  })

  bh2.addEventListener('click', function() {
    playCard(blueHand, 1);
  })

  bh3.addEventListener('click', function() {
    playCard(blueHand, 2);
  })

  bh4.addEventListener('click', function() {
    playCard(blueHand, 3);
  })

  bh5.addEventListener('click', function() {
    playCard(blueHand, 4);
  })

  bh6.addEventListener('click', function() {
    playCard(blueHand, 5);
  })

  bh7.addEventListener('click', function() {
    playCard(blueHand, 6);
  })

  bh8.addEventListener('click', function() {
    playCard(blueHand, 7);
  })
}

function playCard(whosHand, index) {
  console.log('top card before: ', topCard);
  var card = whosHand.splice(index,1);
  topCard.unshift(card);
  console.log('card picked: ', card);
  console.log('top card after: ', topCard)
  // topCard.unshift(whosHand.splice(index,1));
  // console.log('topcard: ', topCard);
  // console.log('redhand: ', redHand, 'blueHand: ', blueHand);
}





btn.addEventListener('click', function(){
  startGame();
});




