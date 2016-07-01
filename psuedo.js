// crazy 8's

/*

### TO DO ###
1. create discard deck
2. create 'draw' fn
3. call on draw fn when no valid card exists
4. verify play is valid (optional)




### RULES ###

Eight cards are dealt to each player. The remaining cards of the deck are placed face down at the center of the table. The top card is then turned face up to start the game.

Players discard by matching rank or suit with the top card of the discard pile, starting with the player left of the dealer. If a player is unable to match the rank or suit of the top card of the discard pile and does not have an eight, he or she draws cards from the stockpile until getting a playable card. When a player plays an eight, he or she must declare the suit that the next player is to play; that player must then follow the named suit or play another eight.

As an example: Once the six of clubs is played the next player:

can play any of the other sixes
can play any of the clubs
can play any eight (then must declare a different suit)
can draw from the stockpile until willing and able to play one of the above
The game ends as soon as one player has emptied their hand. That player collects a payment from each opponent equal to the point score of the cards remaining in that opponent's hand. Eights score 50, court cards 10 and all other cards face value. If the players run out of cards in the deck, the player with the lowest point score in their hand scores the difference between that hand and each opponent's hand.[1]

The winner of the game is the first player to reach a specific amount of points. For two players it is 100pts, three players 150pts, four 200pts, five 250pts, six 300pts and for seven players 350pts.[citation needed] 1 eyed jacks are to pick up five.

### FLOW ###

1.  generate deck
    create nested array populated with cards
    deck.length = 52

2.  deal from deck randomly to players (Math.random)
    8 each (dealer and player)
      pick a random card from deck and remove it
      store removed cards in player array and dealer array
      repeat 8 times for each player
      end with dealer array (8), player array(8) and deck array (36)

3.  create a gameplay array
    remove first card from deck array, add it to gameplay array and show it
    create current rank and suit vars
    show player hand
    show dealer hand ### player and dealer see each other's hands ###

4.  player goes first and picks a card
    can play same suit, same value or any 8
    give choice to draw from deck array
    if player doesn't draw he plays
    verify that play is valid (see below)
    if valid, remove pick from player array, add to top of gameplay array
    update current rank and suit vars as necessary

5.  dealer goes next
    alternate turn (use array with pop and unshift?)
    gameplay is same as step 4

6.  keep looping steps 4 and 5 until dealer or player array is empty
    if deck.length is 0, take the gameplay deck (aside from top card)
      and create new random deck
    will have to check after each play...


### SET UP ###

create deck:
for (var r=0; r<13; r++) {
  for (var s=0; s<4; s++) {
    var pair = [r+1, s+1];
    deck.push(pair);
  }
}

generates nested array, i.e. [ [5,1], [12,4] ]
index 0 of the inner arrays corresponds to the rank
  (1=ace, 13=king)
index 1 of the inner arrays corresponds to the suit
  (1=club, 2=diamond, 3=heart, 4=spade)
[11,3] is a jack of hearts

if [11,3] is on top, can play:
  1. any jack (4)
  2. any heart (13)
  3. an 8 of any suit (4)

player picks [6,3] / 6 of diamonds
  play = [6,3]
  1.  is play[0] === 8?
        remove card from player hand array and add to top of gameplay array
        ask player what suit to switch to
        if player throws an 8 of spades and switched to hearts, they effectively played an 8 or hearts
        create current rank and current suit vars
  2.  otherwise is play[0] === 11?
        remove card from player hand array and add to top of gameplay array
        rank var stays same
        suit var changes
  3. else if is play[1] === 3?
        remove card from player hand array and add to top of gameplay array
        rank var changes
        suit var stays same
  4. else 'pick another card'
        invalid pick


remove from hand, add to top shuffled deck
get a number corresponding to the index in hand
check to see if the rank at that index is 8
if it isn't,





### Questions ###
1. should I eliminate the gameplay array and just draw from the deck array?
2. svg

array of suits (4)
spritesheet


*/
