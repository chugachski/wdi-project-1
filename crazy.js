console.log('crazy.js loaded');

// create game vars
var players = ['Red', 'Blue'],
    turn = players[0],
    redHand = [],
    blueHand = [],
    shuffledDeck = [],
    topCard = [],
    drawnCountRed = 0,
    drawnCountBlue = 0;

// dom elements
var dealButton = document.querySelector('#deal-hands'),
    rh = document.querySelector('#r-side'),
    bh = document.querySelector('#b-side'),
    onTop = document.querySelector('#top-card'),
    display = document.querySelector('#display-box'),
    draw = document.querySelector('#face-down');



// helper f'ns
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
};

function shuffleTheDeck(deck) {
  var i = deck.length;
  if ( i === 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = deck[i];
     var tempj = deck[j];
     deck[i] = tempj;
     deck[j] = tempi;
   }
   return deck;
};

function dealCard(shuffledDeck) {
  var card = shuffledDeck.pop();
  return card;
};

function playCard(hand, index, domEl) {
  console.log('PLAYED CARDS', topCard);
  var card = hand.splice(index, 1, 'liza'); // placeholder to retain order
  topCard.unshift(card[0]); // splice returns an array
  onTop.innerText = topCard[0].rank + topCard[0].suit;
  if (topCard[0].rank === '8') {
    var newSuit = prompt('Pick a new suit:').toUpperCase();
    onTop.innerText = `8${newSuit}`; // updates text but can't play new suit
    topCard[0].suit = newSuit; // now can play new suit
    console.log('PLAYED CARDS:', topCard);
    console.log('HAND:', hand);
  }

  if (hand === redHand) {
    var node = document.querySelector(`#${domEl}`);
    rh.removeChild(node);
  } else if (hand === blueHand) {
    var blueNode = document.querySelector(`#${domEl}`);
    bh.removeChild(blueNode);
  }

  if (rh.children.length === 0 || bh.children.length === 0) {
    endGame(turn);
    return // stop execution
  }

  altTurn(players);
  renderTurn(turn);
};

function drawCard(hand) {
  hand.push(dealCard(shuffledDeck)); // deal a card to proper hand
  var newCard = document.createElement('div'); // create new div and...

  if (hand === redHand) { // add the proper classes
    drawnCountRed += 1;
    var clr = (7 + drawnCountRed).toString();
    var idr = 'r-' + (7 + drawnCountRed).toString();
    newCard.classList.add('r-hand');
    newCard.classList.add(clr);
    newCard.id = idr;
    newCard.innerText = hand[hand.length - 1].rank + hand[hand.length - 1].suit;
    var innerT = newCard.innerText;
    rh.appendChild(newCard);

    newCard.addEventListener('click', function(event) {
      console.log('EVENT:', event);
      if (turn === 'Red') {
        if (innerT.includes(topCard[0].rank) || innerT.includes(topCard[0].suit) || innerT.includes(8)) {
          playCard(redHand, clr, idr);
        }
      }
    });

  } else if (hand === blueHand) {
    drawnCountBlue += 1;
    var clb = (7 + drawnCountBlue).toString();
    var idb = 'b-' + (7 + drawnCountBlue).toString();
    newCard.classList.add('b-hand');
    newCard.classList.add(clb);
    newCard.id = idb;
    newCard.innerText = hand[hand.length - 1].rank + hand[hand.length - 1].suit;
    bh.appendChild(newCard);

    newCard.addEventListener('click', function(event) {
      console.log('EVENT:', event);
      if (turn === 'Blue') {
        if (innerT.includes(topCard[0].rank) || innerT.includes(topCard[0].suit)){
          playCard(blueHand, clb, idb);
        }
      }
    });
  }

  altTurn(players);
  renderTurn(turn);
};

function altTurn(array) {
  array.push(array.shift());
  turn = array[0];
  return turn;
};

function endGame(winner) {
  display.textContent = `${turn} is victorious!`;
  console.log("GAME OVER");
};

function applyListeners() {
  for (var i=0; i<rh.children.length; i++) {
    rh.children[i].addEventListener('click', function(event) {
      var idx = event.srcElement.classList[1];
      var domEl = event.srcElement.id;
      var innerT = event.srcElement.innerText;
      console.log('EVENT:', event);

      if (turn === 'Red') {
        if (innerT.includes(topCard[0].rank) || innerT.includes(topCard[0].suit) || innerT.includes(8)) {
          playCard(redHand, idx, domEl);
        }
      }
    });
  }

  for (var i=0; i<bh.children.length; i++) {
    bh.children[i].addEventListener('click', function(event) {
      var idx = event.srcElement.classList[1];
      var domEl = event.srcElement.id;
      var innerT = event.srcElement.innerText;
      console.log('EVENT:', event);

      if (turn === 'Blue') {
        if (innerT.includes(topCard[0].rank) || innerT.includes(topCard[0].suit) || innerT.includes(8)) {
          playCard(blueHand, idx, domEl);
        }
      }
    });
  }

  draw.addEventListener('click', function(event) {
    console.log('EVENT:', event);
    if (turn === 'Red') {
        drawCard(redHand);
    } else if (turn === 'Blue') {
        drawCard(blueHand);
    }
  });
};

function renderTurn(currentTurn) {
  display.innerText = `${currentTurn}, it's your turn!`;
};

function startGame() { // sets up the game board
  shuffledDeck = shuffleTheDeck(createDeck());

  for (var i=0; i<8; i++) { // deal hands
    redHand.push(dealCard(shuffledDeck));
    blueHand.push(dealCard(shuffledDeck));
  }

  for (var i=0; i<8; i++) { // add to DOM
    rh.children[i].innerText = redHand[i].rank + redHand[i].suit;
    bh.children[i].innerText = blueHand[i].rank + blueHand[i].suit;
  }

  topCard.push(dealCard(shuffledDeck)); // flip over top card
  onTop.innerText = topCard[0].rank + topCard[0].suit; // add to DOM

  applyListeners(); // add event listeners to cards

  renderTurn(turn); // start playing
};

// start the game
dealButton.addEventListener('click', function(event) {
  startGame();
});
