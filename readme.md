https://stackoverflow.com/questions/45952551/javascript-trying-to-randomly-move-items-from-one-array-to-another
// console.log(dealer)

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

// Go fish
// deal 7 cards to yourself and computer
// have a deck of 38 cards left
//do you have any <insert suit>? --> respond 'yes' or 'No, Go Fish'
//add card to hand, add card to Computer hand
//combine 4 of same value
//most 4 of same value at end wins (7)
//keep track of score
//when draw pile, hand1 and hand2 = 0; game end / and either player has 7 points

