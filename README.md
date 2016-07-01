# Games website

## Crazy 8's:
### Link
github url
### Gameplay:
Crazy 8's is a popular kids card game. Gameplay (per Wikipedia) is as follows:

Eight cards are dealt to each player. The remaining cards of the deck are placed face down at the center of the table. The top card is then turned face up to start the game.

Players discard by matching rank or suit with the top card of the discard pile, starting with the player left of the dealer. If a player is unable to match the rank or suit of the top card of the discard pile and does not have an eight, he or she draws cards from the stockpile until getting a playable card. When a player plays an eight, he or she must declare the suit that the next player is to play; that player must then follow the named suit or play another eight.

As an example: Once the six of clubs is played the next player:
can play any of the other sixes
can play any of the clubs
can play any eight (then must declare a different suit)
can draw from the stockpile until willing and able to play one of the above
The game ends as soon as one player has emptied their hand.

### Technology Used:
-JavaScript
-HTMl
-CSS

### How it works:
My first major task was to create a deck of cards and organize the data. To accomplish this I constructed an array containing 52 objects by using nested for-loops. This way I can access a card by index and its rank and suit by property name. It also allows cards to be pushed, popped, spliced, etc. 

The next challenge was to shuffle the deck. I based this code off of the Fisher-Yates shuffle algorithm. Because the createDeck function is pure, I can call it as a parameter of the fisherYates shuffle function. Once I have a random deck, I set up the game by popping off 8 cards arrays for each player's hand and one to an array containing played cards.

I used the DOM to add text to each div representing a card and added click handlers to each card. Clicking a card calls a function that splices out the object representing a specific card and adds it to the beginning of the an array of played cards. This tripped me up for a long time because I didn't realize that splice always returns an array of items, even if you splice just one! DOM manipulation then updates the text on each card to reflect a play.

If the player needs to draw a card, I used javascript and the DOM to create a new div and populate it with text representing the card that was drawn from the shuffled deck. However, I was unable to add event listeners that would allow that card to be played when clicked because of the way I wrote the previous code.

Problems: Several objectives were not met:
    1. logic does not verify that a play is valid-- you can cheat!
    2. drawn cards cannot be played (see above)
    3. I couldn't come up with any straighforward logic to tell if the game was over-- I can't check to see if a hand is empty, because when a card is spliced out, it gets replaced with a placeholder to retain the order so that cards display properly
    4. The game can't be called 'Crazy Eights' in truth (although it did drive me crazy) because there is no logic to ask what suit to change to if an 8 is played. This logic was in a previous version that relied on prompts to collect information from the user but was unusable when I started to think about how it would actually be interacted with in the browser.
    5. There has to be a better way to add event listeners to 16 cards at once, but I didn't get the loop I designed to work right.

Comments:
Although I learned some valuable things, this game is not what I wanted it to be. I got bogged down in a few key places that took up an unreasonable amount of time. In the future I'd like to rewrite this to actually work, and have card images instead of numbers. But before this project, I had no concept of how all these pieces interact, and now I have a basic idea.

### Citation:
Based fisher yates shuffle function on code from:
http://sedition.com/perl/javascript-fy.html
Gameplay description:
https://en.wikipedia.org/wiki/Crazy_Eights


