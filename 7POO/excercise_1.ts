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
    ) { }

    getSuit(): Suit {
        return this.suit;
    }

    getValue(): number {
        return this.value;
    }

    getName(): string {
        if (this.value < 11 && this.value > 1) return ''+this.value;
        else {
            switch (this.value){
                case 1:
                    return 'Ace';
                case 11:
                    return 'Jack';
                case 12:
                    return 'Queen';
                case 13:
                    return 'King';
            }
        }
    }
}

class Deck {

    constructor(
        private cards: Card[]
    ) { }

    shuffle(): void {
        this.cards.sort(_ => Math.random() - 0.5);
    }

    drawCard(): Card {
        return this.cards.pop();
    }

    seeDeck(): Card[] {
        return this.cards;
    }
}

abstract class Hand {
    constructor(
        protected cards: Card[]
    ) { }

    abstract calculateScore(): number;

    addCard(card: Card): void {
        this.cards.push(card);
    }

    seeHand(): Card[] {
        return this.cards;
    }
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

class BlackJackHand extends Hand {
    private scores: number[];

    constructor(cards: BlackJackCard[]) {
        super(cards);
        this.scores = [];
    }

    calculateScore(): number {
        if (this.scores.length === 0) return 0;

        let maxOver = Number.MIN_VALUE;
        let minOver = Number.MAX_VALUE;

        for (let score of this.scores) {
            if (score === 21) return score;

            if (score > 21 && score < minOver) {
                minOver = score;
            } else if (score <= 21 && score > maxOver) {
                maxOver = score;
            }
        }

        return maxOver !== Number.MIN_VALUE ? maxOver : minOver;
    }

    addCard(card: BlackJackCard): void {
        super.addCard(card);
        this.fillScores(card);
    }

    getScores(): number[] { return this.scores }

    private fillScores(card: BlackJackCard): void {
        if (this.scores == null || this.scores.length === 0) {
            if (card.isAce()) this.scores = [card.getMaxValue(), card.getMinValue()];
            else this.scores = [card.getValue()];

            return;
        }

        if (!card.isAce()) {
            this.scores = this.scores.map(s => s + card.getValue());
        } else {
            const minScores = this.scores.map(s => s + card.getMinValue());
            const maxScores = this.scores.map(s => s + card.getMaxValue());
            this.scores = [...minScores, ...maxScores];
        }
    }
}

const makeDeck = (generic) => {
    const suits = [Suit.Diamonds, Suit.Hearths, Suit.Clubs, Suit.Spades];
    const MAX_NUMBER_PER_SUIT = 13;
    const cards: Card[] = [];

    suits.forEach(suit => {
        for (let i = 1; i <= MAX_NUMBER_PER_SUIT; i++) {
            cards.push(new generic(suit, i));
        }
    });

    return new Deck(cards);
}

//====================== testing
console.log('============ hardCoded testing =============');
let hand: BlackJackHand = new BlackJackHand([]);
hand.addCard(new BlackJackCard(Suit.Clubs, 11));

console.log('my possible scores are:', hand.getScores());

hand.addCard( new BlackJackCard(Suit.Spades, 1) );
console.log('my final score is:', hand.calculateScore());

//====================== testing playing
console.log('\n\n============ play testing =============');
let deck: Deck = makeDeck(BlackJackCard);
deck.shuffle();

let hand2: BlackJackHand = new BlackJackHand([]);
while (hand2.calculateScore() < 21){
    console.log('\n----- new round');
    hand2.addCard( (deck.drawCard()) as BlackJackCard );
    console.log('my hand is:');
    hand2.seeHand().forEach( card => console.log(`\t${card.getName()} of ${card.getSuit()}`) );
    console.log('my best score is:', hand2.calculateScore());
}

if (hand2.calculateScore() === 21) console.log('\n\nOH MY GOD I WON!!!!!!!!!!! :D');
else console.log('\n\ncrap i lost :(');

