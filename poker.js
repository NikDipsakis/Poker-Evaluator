
/// poker 1

/// φτιαξε μια κλαση Deck και μια κλαση Card. 
/// η κλαση card θα εχει number = 2,3,4,....J,Q,K,A   symbol = 'h' ,'s','c','d'  hearts,spades,clubs,diamonds
/// θα εχει μια μεθοδο getFullName() η οποια θα επιστρεφει το full name tou χαρτιου πχ 3h (3 of hearts)
/// η κλαση deck θα εχει attribute array το οποιο θα ειναι ενα array of card objects μια μεθοδο shuffle η οποια θα πρεπει να ανακατευει τις τιμες μεσα στο array (την τραπουλα δηλαδη)
/// στον constructor του deck θελω να υπαρχει κωδικας που να δημιουργει το παραπανω array ( θες δηλαδη να φτιαξεις 52 φυλλα ενα με καθε συνδιασμο αριθμου και συμβολου)
/// μια μεθοδο draw card η οποια θα τραβαει το τελευταιο τραπουλοχαρτο θα το επιστρεφει και θα το βγαζει απο το array
/// μια μεθοδο remainingCards() η οποια θα επιστρεφει εναν αριθμο το ποσα φυλλα δηλαδη ειναι στην τραπουλα


//με λιγα λογια θελω ο παρακατω κωδικας να δουλευει
class Card {
    constructor(name, suit) {
        this.name = name
        this.suit = suit
    };

    introFullCard() {
        let number
        let suit
        if (this.name === 'J') {
            number = 'Jack';
        } else if (this.name === 'Q') {
            number = 'Queen';
        } else if (this.name === 'K') {
            number = 'King';
        } else if (this.name === 'A') {
            number = 'Ace';
        };

        if (this.suit === '♥️') {
            suit = 'Hearts'

        } else if (this.suit === '♣️') {
            suit = 'Spades'

        } else if (this.suit === '♠️') {
            suit = 'Clubs'

        } else if (this.suit === '♦️') {
            suit = 'Diamonds'
        };

        return `${number} of ${suit}`
    };
}

class Deck {
    constructor(array, suits) {
        this.cards

        let newDeck = []

        for (let number of array) {
            for (let suit of suits) {
                newDeck.push(new Card(number, suit))
            }
        }
        this.cards = newDeck
        this.deckOriginalSize = newDeck.length
    };

    shuffleDeck() {
        let shuffledDeck = this.cards.sort(function () {
            return Math.random() - 0.5;
        })
        this.cards = shuffledDeck
    }
    remainingCards() {
        return this.cards.length
    }

    deckDraw() {
        return this.cards.shift()
    }
};

class Player {
    constructor(name, hand) {
        this.name = name
        this.hand = hand
    }
}

function areTwoCardsTheSame(card1, card2) {
    if (card1.name == card2.name && card1.suit == card2.suit) {
        return true
    }
    return false
}

const allCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const cardSuits = ['♥️', '♣️', '♠️', '♦️'];
const deck = new Deck(allCards, cardSuits)

deck.shuffleDeck()

// console.log(deck.cards.length)
// for(let i=0;i<deck.deckOriginalSize;i++){
//     console.log(i+1,deck.deckDraw())
// }
// console.log(deck.cards)



// /////////  NIKOS ///////////////
//console.log(deck)
const playerNick = new Player('Nick', [deck.deckDraw(deck), deck.deckDraw(deck)])
const playerKostas = new Player('Kostas', [deck.deckDraw(deck), deck.deckDraw(deck)])
//const playerMitsos = new Player ('Mitsos' , [deck.deckDraw(deck),deck.deckDraw(deck)])
const pokerPlayers = [playerNick, playerKostas]
const pokerPot = [deck.deckDraw(deck), deck.deckDraw(deck), deck.deckDraw(deck), deck.deckDraw(deck), deck.deckDraw(deck)]

// console.log(pokerPlayers,pokerPot,deck.cards)

// function addPlayer(player) {
//     pokerPlayers.push(player)
// }
// //addPlayer(playerMitsos)



// //deckDraw(deck)
// function remainingCards(deck) {
//     let remainCards = 0
//     for (i = 1; i <= deck.length; i++) {
//         remainCards += 1
//     }
//     console.log(`${remainCards} Cards remaining`)
// }
// //remainingCards(deck)


function oneOfAKind(player, pot) {

    console.log("player => ", player)
    console.log("pot => ", pot)
    const playingCards = [...player.hand, ...pot]

    for (let card1 of playingCards) {
        for (let card2 of playingCards) {
            if (!areTwoCardsTheSame(card1, card2)) {
                if (card1.name == card2.name) {
                    return [card1, card2]
                }
            }
        }
    }

    return false
}

function isCardUsed(card, usedCards) {
    for (let useCard of usedCards) {
        if (areTwoCardsTheSame(useCard, card)) {
            return true
        }
    }
    return false
}

function twoOfAkind(player, pot) {
    let combo = []
    console.log("player => ", player)
    console.log("pot => ", pot)

    const playingCards = [...player.hand, ...pot]

    let useCards = []
    for (let card1 of playingCards) {
        if (!isCardUsed(card1, useCards)) {
            for (let card2 of playingCards) {
                if (!isCardUsed(card2, useCards)) {
                    if (!areTwoCardsTheSame(card1, card2)) {
                        if (card1.name == card2.name) {
                            useCards.push(card1)
                            useCards.push(card2)
                            combo.push([card1, card2])
                        }
                    }
                }
            }
        }

    }


    if (combo.length == 2) {

        return combo
    }
    return false
}

//console.log(oneOfAKind(playerKostas,pokerPot))
console.log(twoOfAkind(playerKostas, pokerPot))
// oneOfAKind(pokerPlayers, pokerPot)
// console.log(pokerPlayers[0])
// console.log(pokerPlayers[1])
// console.log(...pokerPot)
// //console.log(deck)

// //console.log(deck.remainingCards()) /// output -> 43
// /// μετα θελω να ελεγχει αν καποιος παιχτης εχει ζευγαρι
// //const card = new Card(allCards[0][1], cardSuits[1]);
// //Answer: const deck = new Deck()

// //Answer: deck.shuffle()
// //console.log(deck.deckCreate())
// //console.log(deck.deckDraw())




// for (let i = 0; i < deck.length; i++) {
//     console.log(i)
//     console.log(deck.pop())
// }


