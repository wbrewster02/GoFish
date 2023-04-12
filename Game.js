// Go fish
// deal 7 cards to yourself and computer
// have a deck of 38 cards left
//do you have any <insert suit>? --> respond 'yes' or 'No, Go Fish'
//add card to hand, add card to Computer hand
//combine 4 of same value
//most 4 of same value at end wins (7)
//keep track of score
//when draw pile, hand1 and hand2 = 0; game end / and either player has 7 points


class Card {
    constructor(suit, values) {
        this.suit = suit;
        this.values = values;
    }

}
class Deck {
    constructor() {
        this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        this.values = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",
            "Ace",
        ];
        this.deck = [];
        this.suits.forEach((suit) => {
            this.values.forEach((value) => {
                const card = new Card(suit, value);
                this.deck.push(card);
            });
        });

    }

    shuffleDeck() {
        let currentIndex = this.deck.length,
          randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          // And swap it with the current element.
          [this.deck[currentIndex], this.deck[randomIndex]] = [
            this.deck[randomIndex],
            this.deck[currentIndex],
          ];
        }
    }
}
const dealer = new Deck();
dealer.deck.shuffleDeck();
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

const hand1 = [];
const hand2 = [];
const tmp = [];
function deal() {
    while (hand1.length < 7) {
    tmp.push(dealer.deck.splice(Math.floor(Math.random() * dealer.deck.length - 1), 1)[0]);
    hand1.push(tmp.pop());
};
while (hand2.length < 7) {
    tmp.push(dealer.deck.splice(Math.floor(Math.random() * dealer.deck.length - 1), 1)[0]);
    hand2.push(tmp.pop());
}
}

// // Obtain the img element, and assign it to the image variable
// let image = document.getElementById('pet')

// // Obtain the 'shrink-grow' button, and assign it to the changeSize variable
// let changeSize = document.getElementById('shrink-grow')

// //DO NOT CHANGE THE FOLLOWING CODE
// changeSize.addEventListener("click", function() {
//   if (image.style.height == "100px") {
//     image.style.height = "25px"
//   }
//   else {
//     image.style.height = "100px"
//   }
// })
const btn = document.getElementById("btn")
btn.addEventListener("click", dealer.deck.shuffleDeck())


// const drawPile = []

//request card function needed
//'go fish' function needed
//add function needed
//if 'value'='value' -> remove from x add to y
//else console.log("go fish")
