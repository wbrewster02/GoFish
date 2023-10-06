
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
dealer.shuffleDeck();


const hand1 = [];
const hand2 = [];
const tmp = [];
const myHand = document.querySelector(".hd1 > .cards")
const otherHand = document.querySelector(".hd2 > .cards")
const request = document.querySelector("#request")

function deal() {
    while (hand1.length < 7) {
        tmp.push(dealer.deck.splice(Math.floor(Math.random() * dealer.deck.length - 1), 1)[0]);
        let card = tmp.pop()
        hand1.push(card);
        let fileName = `${card.values.toLowerCase()}_of_${card.suit.toLowerCase()}.png`
        let image = document.createElement("img")
        image.src = "assets/" + fileName
        image.setAttribute('value', card.values)
        image.setAttribute('suit', card.suit)
        addToHand(myHand, image)
        if (!request.querySelector(`[value="${card.values}"]`)) {
            let option = document.createElement('option')
            option.value = card.values
            option.innerHTML = card.values
            request.appendChild(option)
        }
    };

    while (hand2.length < 7) {
        tmp.push(dealer.deck.splice(Math.floor(Math.random() * dealer.deck.length - 1), 1)[0]);
        let card = tmp.pop()
        hand2.push(card);
        let fileName = `cardBack.png`
        let image = document.createElement("img")
        image.src = "assets/" + fileName
        image.setAttribute('value', card.values)
        image.setAttribute('suit', card.suit)
        otherHand.appendChild(image)
        // check4Set(card.values, otherHand)
    }
}

const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    dealer.shuffleDeck()
    deal()
})


const ask = document.getElementById("ask")
ask.addEventListener("click", () => {
    let value = request.value;
    let cards = otherHand.querySelectorAll(`[value="${value}"]`)
    if (cards.length) {
        cards.forEach(card => {
            let suit = card.getAttribute('suit');
            let fileName = `${value.toLowerCase()}_of_${suit.toLowerCase()}.png`
            card.src = "assets/" + fileName
            addToHand(myHand, card)
            
        })
        setTimeout(player2Turn, 1000)
    } else {
        alert("Go Fish!")
        drawBtn.removeAttribute('disabled')
    }

})


function player2Turn() {
    let index = Math.ceil(Math.random() * otherHand.querySelectorAll('img').length)
    let player2card = document.querySelector(`.hd2 img:nth-child(${index})`)
    let value = player2card.getAttribute("value")
    alert(`Do you have any ${value}s?`)
    let cards = myHand.querySelectorAll(`[value="${value}"]`)
    console.log(cards)
    if (cards.length) {
        cards.forEach(card => {
            card.src = "assets/cardBack.png"
            otherHand.appendChild(card)
            check4Set(value, otherHand)
        })
        request.removeChild(request.querySelector(`[value="${value}"]`))
    } else {
        alert("Go Fish!")
        drawCard(otherHand)
        // hand2.forEach((card) => {
        //     console.log(card)
        //     check4Set(card.values, hand2)
        //     })
        
    }

}


const drawBtn = document.getElementById("drawPile")
drawBtn.addEventListener("click", () => {
    drawBtn.setAttribute('disabled', true)
    drawCard(myHand)
    setTimeout(player2Turn, 1000)
})

function drawCard(hand) {
    let card = dealer.deck.pop();
    if (hand == myHand) {
        var fileName = `${card.values.toLowerCase()}_of_${card.suit.toLowerCase()}.png`
    } else {
        var fileName = "cardBack.png"
    }
    let image = document.createElement("img")
    image.src = "assets/" + fileName
    image.setAttribute('value', card.values)
    image.setAttribute('suit', card.suit)
    
    addToHand(hand, image)

    //test
    if (hand == myHand && !request.querySelector(`[value="${card.values}"]`)) {
    let option = document.createElement('option')
    option.value = card.values
    option.innerHTML = card.values
    request.appendChild(option)}
}

function addToHand(hand, image) {
    let value = image.getAttribute('value')
    let sameValue = hand.querySelector(`[value="${value}"]`)
    if (sameValue) {
        hand.insertBefore(image, sameValue)
    } else {
        hand.appendChild(image)
    }

    check4Set(value, hand)
    console.log(hand)
    // hand.forEach((card) => {
    //     check4Set(card.getAttribute('value'), hand)
    //   })
}

function check4Set(value, hand) {
    console.log(hand)
    // Array.from(hand.children).forEach((card) => {
    //     console.log(card);
    //     })
    const cards = Array.from(hand.children)
    let temp = [];
    let matches = 0;
    for (let j = 0; j < cards.length; j++) {
        console.log("Value we're targeting: " + value);
        console.log("Value of card in hand we're checking: " + cards[j].getAttribute("value"));
        if (value == cards[j].getAttribute("value")) {
            matches = matches + 1;
            temp.push(cards[j])
        }
    }            
    // const cards = hand.(card => card.values == value);
    // let cards = hand.forEach((card) => {
    //     (card.values , hand)
    //   })


    if (matches == 4) {
        console.log(cards)
        console.log(hand)
        for (let i = 0; i < 4; i++) {
            hand.removeChild(hand.querySelector(`[value="${value}"]`))
        }

        let scoreBoard = hand.previousElementSibling.querySelector("span")
        let score = parseInt(scoreBoard.innerHTML)
        let newScore = score + 1;
        scoreBoard.innerHTML = newScore

        //test 2 
        {request.removeChild(request.querySelector(`[value="${value}"]`))}

        if (newScore == 7) {
            if (hand == myHand) {
                alert("Game Over! You Win!") 
            }
            else {
                alert("Game Over! You Lose!")
            }
            location.reload()
        }

    }

}
