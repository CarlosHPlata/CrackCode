// DECK OF CARDS
// Design the data tructures for a generic deck of cards.
// explain how you would subclasss the data structures to implement blackjack

enum Suit {
    Diamonds = 'Diamonds',
    Hearths = 'Hearths',
    Clubs = 'Clubs',
    Spades = 'Spades'
}

class Card {

    constructor(
	protected suit: Suit,
	protected value: number
    ){}

    getSuit(): Suit {
	return this.suit;
    }

    getValue(): number {
	return this.value;
    }
}

class Deck {

    constructor(
	private cards: Card[]
    ){}

    shuffle() {
	this.cards.sort(_ => Math.random() - 0.5);
    }

    drawCard(): Card {
	return this.cards.pop();
    }

    seeDeck(): Card[] {
	return this.cards;
    }
}

interface hand {
    new (cards:Card[]);
    calculateScore(): number;
}

// ------------------------ how to implement blackjack

class BlackJackCard extends Card {
    
    constructor(
	suit: Suit,
	value: number
    ) {
	super(suit, value);
    }

    isAce(): boolean {
	return this.value === 1;
    }

    getValue(): number {
	if (this.value > 10) return 10;
	else return this.value;
    }

    getMaxValue(): number {
	if (this.isAce()) return 11;
	else return this.getValue();
    }

    getMinValue(): number {
	return this.getValue();
    }
}

const makeDeck = () => {
    const suits = [ Suit.Diamonds, Suit.Hearths, Suit.Clubs, Suit.Spades ];
    const MAX_NUMBER_PER_SUIT = 13;
    const cards: Card[] = [];

    suits.forEach(suit => {
	for (let i=1; i<=MAX_NUMBER_PER_SUIT; i++) {
	   cards.push(new Card(suit, i)); 
	}
    });

    return new Deck(cards);
}
 
