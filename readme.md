Go FIsh Game!
Objective-> To make a working game of go fish using the listed characteristics, guidelines, and rules:

// Go fish
Deal 7 cards to yourself and computer (opponent).
Have a deck of 38 cards left.
Do you have any <insert suit>? --> respond 'yes' or 'No, Go Fish'.
Add card to hand, add card to computer hand.
Combine 4 cards of same value (matching numbers. IE: 3 of spades, clubs, hearts and diamonds)
Keep track of score.
Player with highest (7) sets wins.
Game ends and gives notification declaring winner (User or Computer opponent).






Resources used:
https://stackoverflow.com/questions/45952551/javascript-trying-to-randomly-move-items-from-one-array-to-another

//below is used to randomly select index from array (Deck) and add to hand1/hand2
// var tmp = [];
// while (team1.length < 4) {
//   tmp.push(players.splice(Math.floor(Math.random() * players.length - 1), 1)[0]);
//   team1.push(tmp.pop());
// }

// while (team2.length < 4) {
//   tmp.push(players.splice(Math.floor(Math.random() * players.length - 1), 1)[0]);
//   team2.push(tmp.pop());
// }

//some code used line 2-54 was used by Nick Altunia in an example
// line 66-96 from https://stackoverflow.com/questions/45952551/javascript-trying-to-randomly-move-items-from-one-array-to-another
card backs https://i.ibb.co/M5xJxM5/card-deck-1.png
card fronts https://opengameart.org/content/playing-cards-vector-png



Received help from Gerald Wilingham 
Received review/help from Tommy Aker


Issues:

Game error that does not declare computer as the winner when computer recieves 7 points.

New Features:

Allow games of 4 total opponents.
Allow users to play with friends.

