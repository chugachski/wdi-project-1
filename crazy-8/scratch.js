for (i=0; i<20; i++){
  console.log(Math.floor(Math.random() * 52));
}

// whole deck
// deck.length = 52
Math.floor(Math.random() * deck.length);
// => 6 => [2,3]

// remove card from deck
var card = deck.splice(6, 1);
// => [2,3]
// deck.length;
// => 51
// add to player array
playerHand.push(card);

// remove another card
Math.floor(Math.random() * deck.length);
// => 45 => [12,3]
deck.splice(45, 1);
// => [12, 3]
// deck.length;
// => 50



var deal = function(deckLength){
  for (deckLength; deckLength>44; deckLength -= 1){
    randNum = Math.floor(Math.random() * deckLength);
    var deltCard = deck.splice(randNum, 1);
    var playerHand = this.playerhand.push(deltCard);
  }
  return playerHand;
}

deck = [];
      for (var r=0; r<13; r++) { // let r be card rank
        for (var s=0; s<4; s++) { // let s be card suit
          var pair = [r+1, s+1];
          deck.push(pair);
        }
      }


deck = [
  {rank: 'ace', suit: 'clubs'},
  {rank: 'ace', suit: 'diamonds'},
  {rank: 'ace', suit: 'hearts'},
  {rank: 'ace', suit: 'spades'},

  {rank: '2', suit: 'clubs'},
  {rank: '2', suit: 'diamonds'},
  {rank: '2', suit: 'hearts'},
  {rank: '2', suit: 'spades'},

  {rank: '3', suit: 'clubs'},
  {rank: '3', suit: 'diamonds'},
  {rank: '3', suit: 'hearts'},
  {rank: '3', suit: 'spades'},

  {rank: '4', suit: 'clubs'},
  {rank: '4', suit: 'diamonds'},
  {rank: '4', suit: 'hearts'},
  {rank: '4', suit: 'spades'},

  {rank: '5', suit: 'clubs'},
  {rank: '5', suit: 'diamonds'},
  {rank: '5', suit: 'hearts'},
  {rank: '5', suit: 'spades'},

  {rank: '6', suit: 'clubs'},
  {rank: '6', suit: 'diamonds'},
  {rank: '6', suit: 'hearts'},
  {rank: '6', suit: 'spades'},

  {rank: '7', suit: 'clubs'},
  {rank: '7', suit: 'diamonds'},
  {rank: '7', suit: 'hearts'},
  {rank: '7', suit: 'spades'},

  {rank: '8', suit: 'clubs'},
  {rank: '8', suit: 'diamonds'},
  {rank: '8', suit: 'hearts'},
  {rank: '8', suit: 'spades'},

  {rank: '9', suit: 'clubs'},
  {rank: '9', suit: 'diamonds'},
  {rank: '9', suit: 'hearts'},
  {rank: '9', suit: 'spades'},

  {rank: '10', suit: 'clubs'},
  {rank: '10', suit: 'diamonds'},
  {rank: '10', suit: 'hearts'},
  {rank: '10', suit: 'spades'},

  {rank: 'jack', suit: 'clubs'},
  {rank: 'jack', suit: 'diamonds'},
  {rank: 'jack', suit: 'hearts'},
  {rank: 'jack', suit: 'spades'},

  {rank: 'queen', suit: 'clubs'},
  {rank: 'queen', suit: 'diamonds'},
  {rank: 'queen', suit: 'hearts'},
  {rank: 'queen', suit: 'spades'},

  {rank: 'king', suit: 'clubs'},
  {rank: 'king', suit: 'diamonds'},
  {rank: 'king', suit: 'hearts'},
  {rank: 'king', suit: 'spades'},
];

deltCards = [];

function shuffleCards(deckLength){
  var card = '';
  for (deckLength; deckLength>0; deckLength -= 1){
    randNum = Math.floor(Math.random() * deckLength);
    deltCard = deck.splice(randNum, 1);
    deltCards.push(deltCard);
  }
  return deltCards;
}

shuffleCards(deck.length);



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var array = [2, 11, 37, 42];
shuffle(array);
console.log(array);



function fisherYates (unshuffled) {
  var i = unshuffled.length;
  if ( i === 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = unshuffled[i];
     var tempj = unshuffled[j];
     unshuffled[i] = tempj;
     unshuffled[j] = tempi;
   }
   return unshuffled;
}
var cards = [2, 3, 4, 5, 7, 9, 11, 13 ];
fisherYates(cards);


fisherYates: function (unshuffled) {
  var i = unshuffled.length;
  if ( i === 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = unshuffled[i];
     var tempj = unshuffled[j];
     unshuffled[i] = tempj;
     unshuffled[j] = tempi;
   }
   return unshuffled;
}




switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the result of expression matches valueN
    [break;]
  default:
    //Statements executed when none of the values match the value of the expression
    [break;]
}


playerAction: 0,1,2,3,4,5,6,7,8
var i;
switch (playerAction) {
  case 0:
  i = 0;
  this.shuffledDeck.unshift(this.playerHand.splice(i, 1));
  this.setCurrent(false);
    break;
  case 1:
    code
    break;
  case 2:
    code
    break;
  case 3:
    code
    break;
  case 4:
    code
    break;
  case 5:
    code
    break;
  case 6:
    code
    break;
  case 7:
    code
    break;
  default:
    code
    break;
}


function createDeck(){
  var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suits = ["C", "D", "H", "S"];
  var deck = [];

  for (var r=0; r<ranks.length; r++){ // runs 13 times
    for (var s=0; s<suits.length; s++){ // runs 4 times
      var pair = {rank: ranks[r], suit: suits[s]};
      deck.push(pair);
    }
  }

  // for(i=0; i<52; i++){
  //   console.log(this.deck[i]);
  // }

  return deck;
}
createDeck();




















