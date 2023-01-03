
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
        if (this.name === 'J') {
            this.name = 'Jack';
        } else if (this.name === 'Q') {
            this.name = 'Queen';
        } else if (this.name === 'K') {
            this.name = 'King';
        } else if (this.name === 'A') {
            this.name = 'Ace';
        };

        if (this.suit === '♥️') {
            return {
                name: this.name,
                suit: 'Hearts'
            };
        } else if (this.suit === '♣️') {
            return {
                name: this.name,
                suit: 'Spades'
            };
        } else if (this.suit === '♠️') {
            return {
                name: this.name,
                suit: 'Clubs'
            };
        } else if (this.suit === '♦️') {
            return {
                name: this.name,
                suit: 'Diamonds'
            };

        };

    };
}

class Deck {
    constructor(array, suits) {
        this.array = array
        this.suits = suits
        let newDeck = []

        for (let smallerArr of this.array) {
            for (let card of smallerArr) {
                for (let suit of this.suits) {
                    newDeck.push({
                        suit: suit,
                        card: card
                    })

                }
            }
        }
        let shuffledDeck = newDeck.sort(function () {
            return Math.random() - 0.5;
        })
        return shuffledDeck
    };
};

class Player {
    constructor(name, hand) {
        this.name = name
        this.hand = hand
    }
}
const allCards = [[2, 3, 4, 5, 6, 7, 8, 9, 10], ['J', 'Q', 'K', 'A']];
const cardSuits = ['♥️', '♣️', '♠️', '♦️'];
const deck = new Deck(allCards, cardSuits)
//console.log(deck)
const playerNick = new Player('Nick', [deckDraw(deck), deckDraw(deck)])
const playerKostas = new Player('Kostas', [deckDraw(deck), deckDraw(deck)])
//const playerMitsos = new Player ('Mitsos' , [deckDraw(deck),deckDraw(deck)])
const pokerPlayers = [playerNick, playerKostas]
const pokerPot = [deckDraw(deck), deckDraw(deck), deckDraw(deck), deckDraw(deck), deckDraw(deck)]


function addPlayer(player) {
    pokerPlayers.push(player)
}
//addPlayer(playerMitsos)

function deckDraw(deck) {
    return deck.pop()
}

//deckDraw(deck)
function remainingCards(deck) {
    let remainCards = 0
    for (i = 1; i <= deck.length; i++) {
        remainCards += 1
    }
    console.log(`${remainCards} Cards remaining`)
}
remainingCards(deck)

function oneOfAKind(players, pot) {
    for (player of players) {
        for (i = 0; i < players.length; i++) {
            console.log(player.hand[i].card)
            for (let card of pot) {
                if (player.hand[i].card === card.card || player.hand[0].card === player.hand[1].card) {
                    console.log(`${player.name} got a pair`)
                   
                }
            
            }
        }
    }return true
}

oneOfAKind(pokerPlayers, pokerPot)
console.log(pokerPlayers[0])
console.log(pokerPlayers[1])
console.log(...pokerPot)
//console.log(deck)

//console.log(deck.remainingCards()) /// output -> 43
/// μετα θελω να ελεγχει αν καποιος παιχτης εχει ζευγαρι
//const card = new Card(allCards[0][1], cardSuits[1]);
//Answer: const deck = new Deck()

//Answer: deck.shuffle()
//console.log(deck.deckCreate())
//console.log(deck.deckDraw())







