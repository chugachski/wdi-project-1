var btn = document.querySelector('#deal');
rh = document.querySelector('#r-side'),
bh = document.querySelector('#b-side'),
onTop = document.querySelector('#current-card'),
dispTurn = document.querySelector('#turn'),
faceDn = document.querySelector('#face-down'),
rh0 = document.querySelector('#r-0'),
rh1 = document.querySelector('#r-1'),
rh2 = document.querySelector('#r-2'),
rh3 = document.querySelector('#r-3'),
rh4 = document.querySelector('#r-4'),
rh5 = document.querySelector('#r-5'),
rh6 = document.querySelector('#r-6'),
rh7 = document.querySelector('#r-7'),
rh8 = document.querySelector('#r-8'),
bh0 = document.querySelector('#b-0'),
bh1 = document.querySelector('#b-1'),
bh2 = document.querySelector('#b-2'),
bh3 = document.querySelector('#b-3'),
bh4 = document.querySelector('#b-4'),
bh5 = document.querySelector('#b-5'),
bh6 = document.querySelector('#b-6'),
bh7 = document.querySelector('#b-7'),
bh8 = document.querySelector('#b-8'),
draw = document.querySelector('#face-down')

participants = ['Red', 'Blue'],
turn = 'Red',
blueHand = [],
redHand = [],
shuffledDeck = [],
discardPile = [],
topCard = [],
drawnCountRed = 0;
drawnCountBlue = 0;

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

function altTurn(array){
    array.push(array.shift());
    this.turn = array[0];
    return this.turn
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

  // console.log('topCard: ', topCard);
  console.log("TOPCARD1: ", topCard);
  console.log("IS ARR?", Array.isArray(topCard));
  console.log("THING TO PUSH INTO TOPCARD: ", dealCard(shuffledDeck));
  topCard.push(dealCard(shuffledDeck)); // deal a card into topCard array
  console.log("TOPCARD2: ", topCard);
  console.log("IS ARR?", Array.isArray(topCard));

  onTop.innerText = topCard[0].rank + topCard[0].suit; // add to DOM
  dispTurn.innerText = `${turn}, it\'s your turn!`
  gamePlay();
}

function gamePlay() {
  console.log(`redHand: ${redHand.length}, blueHand: ${blueHand.length}, shuffledDeck: ${shuffledDeck.length} turn: ${turn} `);

 // add event listeners to red cards
  rh0.addEventListener('click', function() {
    playCard(redHand, 0, rh0);
  })

  rh1.addEventListener('click', function() {
    playCard(redHand, 1, rh1);
  })

  rh2.addEventListener('click', function() {
    playCard(redHand, 2, rh2);
  })

  rh3.addEventListener('click', function() {
    playCard(redHand, 3, rh3);
  })

  rh4.addEventListener('click', function() {
    playCard(redHand, 4, rh4);
  })

  rh5.addEventListener('click', function() {
    playCard(redHand, 5, rh5);
  })

  rh6.addEventListener('click', function() {
    playCard(redHand, 6, rh6);
  })

  rh7.addEventListener('click', function() {
    playCard(redHand, 7, rh7);
  })

// add event listeners to blue cards
  bh0.addEventListener('click', function() {
    playCard(blueHand, 0, bh0);
  })

  bh1.addEventListener('click', function() {
    playCard(blueHand, 1, bh1);
  })

  bh2.addEventListener('click', function() {
    playCard(blueHand, 2, bh2);
  })

  bh3.addEventListener('click', function() {
    playCard(blueHand, 3, bh3);
  })

  bh4.addEventListener('click', function() {
    playCard(blueHand, 4, bh4);
  })

  bh5.addEventListener('click', function() {
    playCard(blueHand, 5, bh5);
  })

  bh6.addEventListener('click', function() {
    playCard(blueHand, 6, bh6);
  })

  bh7.addEventListener('click', function() {
    playCard(blueHand, 7, bh7);
  })
}

function playCard(whosHand, index, domEl) {
  console.log("thing we'd like to remove: ", whosHand[index]);
  var card = whosHand.splice(index, 1, 'liza'); // returns arr of the card 'liza' is a placeholder to retain the order
  topCard.unshift(card[0]);
  onTop.innerText = topCard[0].rank + topCard[0].suit // b/c we used splice
  domEl.innerText = 'X'; // replace rank and suit with 'x'
  if (redHand.includes(Object)) {
    console.log('hand not empty');
  }

  altTurn(participants); // switch players
  dispTurn.innerText = `${turn}, it\'s your turn!` // change displayed turn
}

function drawCardRed() {
  redHand.push(dealCard(shuffledDeck));
  var newCard = document.createElement('div');
  newCard.classList.add('r-hand');
  newCard.id = `r-${8+drawnCountRed}`;
  rh.appendChild(newCard);
  newCard.innerText = redHand[8+drawnCountRed].rank + redHand[8+drawnCountRed].suit;
  drawnCountRed += 1;

  altTurn(participants);
  dispTurn.innerText = `${turn}, it\'s your turn!`;
}

function drawCardBlue() {
  blueHand.push(dealCard(shuffledDeck));
  var newCard = document.createElement('div');
  newCard.classList.add('b-hand');
  newCard.id = `b-${8+drawnCountBlue}`;
  bh.appendChild(newCard);
  newCard.innerText = blueHand[8+drawnCountBlue].rank + blueHand[8+drawnCountBlue].suit;
  drawnCountBlue += 1;

  altTurn(participants);
  dispTurn.innerText = `${turn}, it\'s your turn!`;
}

draw.addEventListener('click', function() {
  console.log('You clicked on draw');
  if (turn === 'Red') {
      drawCardRed();
  } else if (turn === 'Blue') {
      drawCardBlue();
  }
})

btn.addEventListener('click', function(){
  startGame();
});
